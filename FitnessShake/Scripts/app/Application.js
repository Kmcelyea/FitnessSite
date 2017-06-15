var Application = angular.module('Application', ['ui.router', 'ui.bootstrap']);

Application.controller('LandingPageController', LandingPageController);


var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $stateProvider
        .state('stateOne', {
            url: '/stateOne',
            views: {
                "containerOne": {
                    templateUrl: '/test/one'
                },
                "containerTwo": {
                    templateUrl: '/test/two'
                },
                "sliceOne":{
                    templateUrl: '/slider/one'
                },
                "sliceTwo": {
                    templateUrl: '/slider/two'
                },
                "nestedView@stateOne": {
                    templateUrl: '/test/four'
                }
            }
        })
        .state('stateTwo', {
            url: '/stateTwo',
            views: {
                "containerOne": {
                    templateUrl: '/test/two'
                },
                "containerTwo": {
                    templateUrl: '/test/one'
                },
                "sliceOne": {
                    templateUrl: '/slider/one'
                },
                "sliceTwo": {
                    templateUrl: '/slider/two'
                },
            }
        })
        .state('stateThree', {
            url: '/stateThree',
            views: {
                "containerOne": {
                    templateUrl: '/test/three'
                },
                "containerTwo": {
                    templateUrl: '/test/one'
                },
                "nestedView@stateThree": {
                    templateUrl: '/test/four'
                },
                "sliceOne": {
                    templateUrl: '/slider/one'
                },
                "sliceTwo": {
                    templateUrl: '/slider/two'
                },
            }
        });
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

Application.config(configFunction);