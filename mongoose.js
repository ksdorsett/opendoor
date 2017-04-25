// Use jQuery post() and getJSON() methods to communicate with 
// the routes defined via server01.

(function() {
	"use strict";
	
	$('#insert').on('click', function() {
		var firstName = $('#firstName').val(),
				lastName = $('#lastName').val(),
				affil = $('#affil').val(),
				newPerson = {"firstName" : firstName,
									 "lastName" : lastName,
									 "affil" : affil
									};
		$.post("put", newPerson, function(result) {
			if (result === 'UPDATED') {
				$("#inserted").removeClass("subsucceed");
				$("#notinserted").addClass("subfail");
			}
			else {
				$("#inserted").removeClass("subsucceed");
				$("#notinserted").addClass("subfail");
			}
		});
	});
	
	$('#retrieve').on('click', function() {
		var firstName = $('#firstName').val(),
				lastName = $('#lastName').val(),
				affil = parseInt($('#affil').val()),
				url = 'getItem?';
		
		if (firstName) url += ('&firstName=' + firstName);
		if (lastName) url += ('&lastName=' + lastName);
		if (affil) url += ('&affil=' + affil);
		if (url === 'getItem?') return;

		$.getJSON(url, function(result) {
			if (result.length) {
				var foundItem = result[0];
				$('#error').addClass("found");
				$('#firstName').val(foundPerson.firstName);
				$('#lastName').val(foundPerson.lastName);
				$('#affil').val(foundPerson.affil);
            }
			else $('#error').removeClass("found");
		});
	});
	
	$('#clear').on('click', function() {
		$('#firstName').val("");
		$('#lastName').val("");
		$('#affil').val(0);
		$('#error').addClass("found");
		$("#inserted").addClass("subsucceed");
		$("#notinserted").addClass("subfail");
	});
	
}());