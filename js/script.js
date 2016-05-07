function doAgenderRoll(){
	var responses = [
		"400 Bad Request",
		"204 No Content",
		"I bought shoes. How was your week?",
		"404 File Not Found",
		"410 Gone",
		"417 Expectation Failed",
		"420 Method Failure",
		"421 Misdirected Request",
		"424 Failed Dependency",
		"444 No Response",
		"499 Request has been forbidden by antivirus",
		"No') DROP TABLE genders; --');",
		"Why? For what?",
		"No thanks, I'm good.",
		"I'd rather not.",
		"I opt out.",
		"501 Not Implemented",
		"503 Service Unavailable",
		"¯\\_(ツ)_/¯",
		"510 Not Extended",
		"This wasn't a dating site last I checked."
	];
	var min = 0;
	var max = responses.length;
	var pseudoRndNo = Math.floor(Math.random() * (max - min + 1)) + min;
	return responses[pseudoRndNo];
}

var app = angular
			.module('myModule', [])
			.controller('myController', function ($scope){
				$scope.developer = {
					name: 'Evelin',
					surname: 'Foxell',
					age: new Date().getYear() - new Date(1989, 04, 28).getYear(),
					gender: doAgenderRoll(),
					github: 'https://github.com/EvelinFoxell'
				};
				$scope.agenderRoll = doAgenderRoll();
			});