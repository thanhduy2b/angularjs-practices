// SERVICES
weatherApp.service('cityService', function() {
    this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days, appid) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, { get: { method: "JSONP" }});

        return weatherAPI.get({ q: city, cnt: days, appid: appid });
    };
}]);