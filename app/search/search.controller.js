(function(){
  angular.module("app.search")
    .controller("search", function($scope, weatherService){
      $scope.$on("search", search);

      function search(evt, data){
        weatherService.find(data.str)
          .then(
          function(response){
           console.log(response);
          },
          function(err) {
           console.log("Error finding cities: ", err)
          }
        )
      }
    });
})()