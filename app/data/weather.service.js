/**
 * Created by mark07 on 5/19/15.
 */
/**
 * Created by mark07 on 5/19/15.
 */
(function () {
  angular.module("app.data")
    .factory("weatherService", function ($http, $q, weatherImageUrl, weatherSvcUrl, countryFlagImageUrl) {
      return {
        find: findByLocation,
        getCurrent: getCurrentWeather,
        getForecast: getForecast,
        getWeatherImageUrl: getWeatherImageUrl,
        getCountryFlagImageUrl: getCountryFlagImageUrl,
        kelvinToDegree: kelvinToDegree,
        getTime: getTime
      }

      function findByLocation(location) {
        var url = weatherSvcUrl + "find?q=" + location;

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

        var url = weatherSvcUrl + "weather/?id=" + id;

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

        var url = weatherSvcUrl + "forecast/daily?id=" + id;

        $http.get(url)
          .success(function(response) {
            defer.resolve(response);
          })
          .error(function(err){
            defer.reject(err)
          })
        return defer.promise;

      };

      function getWeatherImageUrl(imgStr) {
       return weatherImageUrl + imgStr + ".png";
      };

      function getCountryFlagImageUrl(imgStr){
        return countryFlagImageUrl + imgStr.toLowerCase() + ".png";
      };

      function kelvinToDegree(temp){
        return temp - 273.15;
      };

      function getTime(dt){
        return new Date(dt * 1000);
      }

    });
})();