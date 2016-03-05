(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location) {

        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            if(countdownInterval)    {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };
        
        $scope.onchanged = function() {
            if(countdownInterval)    {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
        }

        $scope.username = "yuval66";
        $scope.countdown = 7;
        startCountdown();
    };

    app.controller("MainController", MainController);

}());