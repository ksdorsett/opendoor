/*(function() {
	var app = angular.module('person', []);

	app.controller('Person', ['$scope', function($scope) {
		$scope.firstName = $scope.lastName = $scope.affil = $scope.userName = $scope.password = '';
		$scope.persons = [];
		alert($scope.firstName);
		
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
*/

(function() {
	var app = angular.module('person', []);

	app.controller('Person', ['$scope', function($scope) {
		$scope.firstName = $scope.lastName = $scope.affil = $scope.userName = $scope.password = $scope.currentPassword = '';
		$scope.persons = [];
		
        $scope.add = function() {
            
            var url = 'getPerson?';
            url += ('&userName=' + $scope.userName);
            $.getJSON(url, function(result) {
	       if (result.length) {
            var foundUser = result[0];
            alert(foundUser.userName);
            alert("Username taken");
            }
            
                else{
                    
                    if($scope.firstName!="" && $scope.lastName!="" && $scope.userName!=""
                      && $scope.affil!="" && $scope.password!=""){
                        
                        if($scope.password==$scope.confirmPassword){
			var newUser = {
				"firstName" : $scope.firstName,
				"lastName" : $scope.lastName,
				"affil" : $scope.affil,
                "userName" : $scope.userName,
                "password" : $scope.password
			};
			$scope.persons.push(newUser);
			$.post('putPerson', newUser);
            alert("It worked!");
            document.cookie = "username="+$scope.userName+"; path=/";
            window.location.replace("forum.html");
		  $scope.firstName = $scope.lastName = $scope.affil = $scope.userName = $scope.password = $scope.confirmPassword = '';
                        
                    }else{
                        alert("Passwords must match!");
                    }
                    }else{
                        alert("All information must be filled out!")
                    }
		
                }
            
            });									 
	}}]);
}());