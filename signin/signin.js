angular.module('MyApp.signin', [])
.controller('signinCT', function($scope, account,$location) {
  $scope.data = {};
 $scope.signin = function () {
    var cred = account.signin();
    if($scope.data['username'] === cred['username'] && $scope.data['password'] === cred['password']){
      $location.path('/subjects');     
    }
  }
})
 
