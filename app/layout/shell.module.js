/**
 * Created by mark07 on 5/19/15.
 */
/**
 * Created by mark07 on 5/18/15.
 */
(function(){
  var name = "app.shell",
    requires = ["ngRoute"];

  angular.module(name, requires);

  angular.module(name, requires)
    .config(function($routeProvider){
      $routeProvider
        .when('/search', {
          templateUrl: "app/search/search.html",
          controller: "search"
        })
        .when('/weather/:id', {
          templateUrl: "app/weather/weather.html",
          controller: "weather"
        })
        .when('/forecast/:id', {
          templateUrl: "app/forecast/forecast.html",
          controller: "forecast"
        })
        .otherwise({
          redirectTo: "/search"
        })
    })

})();