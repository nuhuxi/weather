/**
 * Created by mark07 on 5/18/15.
 */
(function(){
  angular.module('app.shell')
    .controller('shell', function($scope, weatherService){

      $scope.getWeatherImageUrl = weatherService.getWeatherImageUrl;
      $scope.getCountryFlagImageUrl = weatherService.getCountryFlagImageUrl;
      $scope.kelvinToDegree = weatherService.kelvinToDegree;
      $scope.getTime = weatherService.getTime;

    });
})()