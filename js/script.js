var app = angular
			.module("myModule", [])
			.controller('myController', function ($scope){
				$scope.developer = {
					name: "Evelin",
					surname: "Foxell",
					age: new Date().getYear() - new Date(1989, 04, 28).getYear(),
					github: "https://github.com/EvelinFoxell"
				};
			});