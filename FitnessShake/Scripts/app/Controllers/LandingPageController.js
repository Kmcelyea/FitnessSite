﻿var LandingPageController = function ($scope) {
    $scope.models = {
        brandName:'INSERT BRAND NAME'
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope'];