/**
 * Created by mark07 on 5/18/15.
 */
(function(){
  angular.module("app.weather")
    .controller("weather", function($scope, $routeParams, weatherService){
      $scope.current = null;

      if($routeParams.id !== undefined){
        getCurrent($routeParams.id)
      }
      function getCurrent(id) {
        weatherService.getCurrent(id)
          .then(
            function(response){
              $scope.current = response;
            },
            function(err) {
              console.log("Error loading the current weather data: ", err);
            }
        )
      }

    });
})()