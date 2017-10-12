angular.module('MyApp',[
  'MyApp.service',
  'MyApp.signin',
  'MyApp.subjects',
  'ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCT'
  })
  .when('/subjects', {
    templateUrl: 'subjects/subjects.html',
    controller: 'subjectsCT',
    authenticate: true
  })
  .otherwise({
    redirectTo: '/signin'
  });
  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  return{
    attach : {
      request: function (object) {
        var jwt = $window.localStorage.getItem('token.subjects');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    } 
  }
})
.run(function ($rootScope, $location, account) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !account.isAuth()) {
      $location.path('/signin');
    }
  });
});