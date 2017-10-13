angular.module('MyApp.subjects', [])
.controller('subjectsCT',function ($scope,$location, $window) {
	$scope.subjects = JSON.parse($window.localStorage.getItem('subjects'))
	$scope.myValue = true
	$scope.data = {}
	$scope.value = 0
	console.log('subject page')
	$scope.generateId = function(){
		if($window.localStorage.getItem('value') === null){
          $window.localStorage.setItem("value", 0)
		}else{
		  $window.localStorage.setItem("value", Number($scope.value) + 1)
		  $scope.value = $window.localStorage.getItem('value')	
		  
		}
	   return Number($scope.value);
	} 
	$scope.addSubjects = function(){
		$scope.myValue = false		
	}
	$scope.submit = function(){
		var subjects = [];
		if(JSON.parse($window.localStorage.getItem('subjects')) !== undefined && JSON.parse($window.localStorage.getItem('subjects')) !== null){
			subjects = JSON.parse($window.localStorage.getItem('subjects'))
		}
		$scope.data['id'] = $scope.generateId()
		subjects.push($scope.data)
		$window.localStorage.setItem("subjects", JSON.stringify(subjects))
		console.log($scope.data)
		$window.location.reload();
	}
	
})