/**
 * Created by mark07 on 5/20/15.
 */
(function(){
  angular.module('app.data')
    .value("weatherImageUrl", "http://openweathermap.org/img/w/")
    .value("weatherSvcUrl", "http://api.openweathermap.org/data/2.5/")
    .value("countryFlagImageUrl", "http://openweathermap.org/images/flags/");
})()