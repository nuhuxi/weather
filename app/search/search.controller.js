(function(){
  angular.module("app.search")
    .controller("search", function($scope, weatherService){
      $scope.cities = null;

      $scope.$on("search", search);

      function search(evt, data){
        weatherService.find(data.str)
          .then(
          function(response){
           $scope.cities = response.list;
          },
          function(err) {
           console.log("Error finding cities: ", err)
          }
        )
      }
    });
})()