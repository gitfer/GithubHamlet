'use strict';

angular.module('GithubHamletApp')
  .controller('MainCtrl', ['$scope' ,'GithubProvider', function ($scope, GithubProvider) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.token = "";
    $scope.lastTokens = [];
    $scope.InterrogaGithub = function(){
	    if($scope.lastTokens.length>=5){
		    $scope.splice(0);
	    }
	    $scope.lastTokens.push($scope.token);
	    GithubProvider.getFunctions($scope.token, function(data){
		    $scope.apis = JSON.stringify(data, null, '\t');
	    });

    };

  }]);
