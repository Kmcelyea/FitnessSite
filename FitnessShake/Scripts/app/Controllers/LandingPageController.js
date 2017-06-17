var LandingPageController = function ($scope, $state) {
    $scope.models = {
        brandName: 'INSERT BRAND NAME',
        coc: 1, //container one color
        ctc: 2 //container two color

    };

    $scope.navbarProperties = {
        isCollapsed: true
    };

    $state.go('stateOne');

    $scope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            if (toState.name === "stateOne") {
                $scope.models.coc = 1; //Black
                $scope.models.ctc = 2; //White
            }
            if (toState.name === "stateTwo") {
                $scope.models.coc = 2; 
                $scope.models.ctc = 4;
            }
            if (toState.name === "stateThree") {
                $scope.models.coc = 2;
                $scope.models.ctc = 1;
            }
        });
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', '$state'];