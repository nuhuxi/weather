/**
 * Created by mark07 on 5/19/15.
 */
/**
 * Created by mark07 on 5/18/15.
 */
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