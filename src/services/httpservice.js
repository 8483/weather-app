var Fetch = require("whatwg-fetch");
var baseUrl = "http://api.openweathermap.org/data/2.5/";
var APIKey = "2e40dcb53bdaa022da7eedc9f8701e1b"

var service = {
    get: function(url){
        return fetch(baseUrl + url + "&APPID=" + APIKey)
        .then(function(response){
            return response.json();
        });
    }
};

module.exports = service;
