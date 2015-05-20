/**
 * Created by mark07 on 5/19/15.
 */
/**
 * Created by mark07 on 5/18/15.
 */

(function(){

  angular.module("app.forecast")
    .controller("forecast", function($scope, $routeParams, weatherService) {
      $scope.forecast = null;

      if ($routeParams.id !== undefined) {
        getForecast($routeParams.id)
        {
          getForecast($routeParams.id);
        }

        function getForecast(id) {
          weatherService.getForecast(id)
            .then(
            function (response) {
              $scope.forecast = response;
            },
            function (err) {
              console.log("Error loading forecast data: ", err);
            }
          )
        }


      }
    });

})()