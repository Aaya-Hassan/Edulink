angular.module('MyApp.signin', [])
.controller('signinCT', function($scope, account,$location) {
  $scope.data = {};
  $scope.signin = function () {
    account.signin($scope.data)
      .then(function () {
       $location.path('/subjects');
      })
      .catch(function (error) {
        console.error(error);
      });
  }
})