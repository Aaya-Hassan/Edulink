angular.module('MyApp.subjects', [])
.controller('subjectsCT',function ($scope,$location, $window) {
	$scope.subjects = JSON.parse($window.localStorage.getItem('subjects'))
	$scope.myValue = false
	$scope.data = {}
	$scope.addSubjects = function(){
		$scope.myValue = false		
	}
	$scope.submit = function(){
		var subjects = [];
		if(JSON.parse($window.localStorage.getItem('subjects')) !== undefined){
			subjects = JSON.parse($window.localStorage.getItem('subjects'))
		}
		subjects.push($scope.data) 
		$window.localStorage.setItem("subjects", JSON.stringify(subjects))
		$window.location.reload();
	}
})