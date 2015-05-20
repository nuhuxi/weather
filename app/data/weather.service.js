/**
 * Created by mark07 on 5/19/15.
 */
/**
 * Created by mark07 on 5/19/15.
 */
(function () {
  angular.module("app.data")
    .factory("weatherService", function ($http, $q) {
      return {
        find: findByLocation,
        getCurrent: getCurrentWeather,
        getForecast: getForecast
      }

      function findByLocation(location) {
        var url = "http://api.openweathermap.org/data/2.5/find?q=" + location;

        var defer = $q.defer();

        $http.get(url)
          .success(function (response) {
            defer.resolve(response);
          })
          .error(function (err) {
            defer.reject(err);
          })

        return defer.promise;
      };
      function getCurrentWeather(id){
        var defer = $q.defer();

        var url = "http://api.openweathermap.org/data/2.5/weather/?id=" + id;

        $http.get(url)
          .success(function(response) {
            defer.resolve(response);
          })
          .error(function(err){
            defer.reject(err)
          })
        return defer.promise;

      };
      function getForecast(id){
        var defer = $q.defer();

        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?id=" + id;

        $http.get(url)
          .success(function(response) {
            defer.resolve(response);
          })
          .error(function(err){
            defer.reject(err)
          })
        return defer.promise;

      }
    });
})();