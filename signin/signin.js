angular.module('MyApp.signin', [])
.controller('signinCT', function($scope, account,$location) {
  $scope.data = {};
  $scope.signin = function () {
    console.log('hello world')
    account.signin($scope.data)
      .then(function () {
       $location.path('/subject');
      })
      .catch(function (error) {
        console.error(error);
      });
  }
})