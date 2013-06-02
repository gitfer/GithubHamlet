'use strict';

angular.module('GithubHamletApp')
.factory('GithubProvider', ['$resource', function ($resource) {
	// Service logic
	// ...

	var url = "https://api.github.com/user";

	// Public API here
	return {
		getFunctions: function (token, myFun) {
			var completeUrl = url + "?access_token=" + token;
			var result = $resource(completeUrl);
			result.get({}, function(response){
				myFun(response);
			});
		}
	};
}]);
