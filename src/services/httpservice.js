var Fetch = require("whatwg-fetch");
var baseUrl = "http://api.openweathermap.org/data/2.5/";
var APIKey = "THE_API_KEY"

var service = {
    get: function(url){
        return fetch(baseUrl + url + "&APPID=" + APIKey)
        .then(function(response){
            return response.json();
        });
    }
};

module.exports = service;
