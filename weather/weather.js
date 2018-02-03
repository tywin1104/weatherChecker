const request = require('request');


var getWeather = (lat,lnt,callback) => {
	request({
	  url:`https://api.darksky.net/forecast/ca36015d319038a874d0aac3a2d485b8/${lat},${lnt}`,
	  json: true
	},(error,response,body)=> {
		if(!error && response.statusCode===200) {
			callback(undefined,{
				temperature:body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature
			});
		}else {
			callback('Unable to fetch weather');
		}
	  
	});
}


module.exports.getWeather = getWeather;