var Application = angular.module('Application', ['ui.router', 'ui.bootstrap']);

Application.controller('LandingPageController', LandingPageController);
Application.controller('SiteController', SiteController);
Application.controller('LoginController', LoginController);
Application.controller('RegisterController', RegisterController);


Application.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
Application.factory('LoginFactory', LoginFactory);
Application.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $stateProvider
        .state('landing', {
            url: '/landing',
            views: {
                "main": {
                    templateUrl: '/home/landing'
                }
            }
        })
        .state('site', {
            url: '/site',
            views: {
                "main": {
                    templateUrl: '/site/index'
                }
            }
        })
        .state('loginRegister', {
            url: '/loginRegister?returnUrl',
            views: {
                "containerOne": {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                },
                "containerTwo": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

Application.config(configFunction);