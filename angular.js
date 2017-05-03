(function() {
	var app = angular.module('person', []);

	app.controller('Person', ['$scope', function($scope) {
		$scope.firstName = $scope.lastName = $scope.affil = $scope.userName = $scope.password = '';
		$scope.persons = [];
		
		$scope.add = function() {
			var newUser = {
				"firstName" : $scope.firstName,
				"lastName" : $scope.lastName,
				"affil" : $scope.affil,
                "userName" : $scope.userName,
                "password" : $scope.password
			};
			$scope.persons.push(newUser);
			$.post('putPerson', newUser);
		  $scope.firstName = $scope.lastName = $scope.affil = $scope.userName = $scope.password = '';
		};									 
	}]);
}());
