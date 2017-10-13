angular.module('MyApp.registration', [])
.controller('registrationCT',function ($scope,$location, $window) {
	$scope.timeLeft = 18
	$scope.data = {}
	$scope.selected = {};
	$scope.subjects = JSON.parse($window.localStorage.getItem('subjects'))
	$scope.addedSubjects = JSON.parse($window.localStorage.getItem('addedSubjects'))


	 $scope.ShowSelected = function() {
	 	if(JSON.parse($window.localStorage.getItem('addedSubjects'))){

	 	}
	 	var selectedId;
	 	var addedSubjects = []
	 	for (var key in $scope.selected){
	 		selectedId = key
	 	}
		if(JSON.parse($window.localStorage.getItem('addedSubjects')) !== null){
			addedSubjects = JSON.parse($window.localStorage.getItem('addedSubjects'))
		}

		var subjects = $scope.subjects
		var object;
		for (var i=0; i < subjects.length; i++){
			if(subjects[i].id === Number(selectedId)){
				object = subjects[i]
			}
		}
		if(addedSubjects.length){
			console.log("Here")
			for (var j=0; j < addedSubjects.length; j++){
			// if(object.startTime > addedSubjects[j].startTime && object.endTime <= addedSubjects[j].endTime ){
			//    object.startTime < addedSubjects.startTime && object.endTime <= addedSubjects.endTime 

			// }
			$window.location.reload();
		}
	}else {
		addedSubjects.push(object)
		$window.localStorage.setItem("addedSubjects", JSON.stringify(addedSubjects))
		$window.location.reload();
	} 
};
})