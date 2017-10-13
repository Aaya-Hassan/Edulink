//app.js
angular.module('MyApp',[
  'MyApp.serv',
  'MyApp.signin',
  'MyApp.signinReg',
  'MyApp.subjects',
  'MyApp.registration',
  'ngRoute'])
.config(function ($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider
  .when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCT'
  })
  .when('/signinReg', {
    templateUrl: 'signinReg/signinReg.html',
    controller: 'signinRegCT'
  })
  .when('/subjects',{
    templateUrl: 'subjects/subjects.html',
    controller: 'subjectsCT',
    authenticate: true
  })
  .when('/registration',{
    templateUrl: 'registration/registration.html',
    controller: 'registrationCT',
    authenticate: true
  })
  .otherwise({
    redirectTo: '/index.html'
  });
  // $httpProvider.interceptors.push('AttachTokens');
     // $locationProvider.html5Mode(true);
})
// // .factory('AttachTokens', function ($window) {
// //   return{
// //     attach : {
// //       request: function (object) {
// //         var jwt = $window.localStorage.getItem('token.airline');
// //         if (jwt) {
// //           object.headers['x-access-token'] = jwt;
// //         }
// //         object.headers['Allow-Control-Allow-Origin'] = '*';
// //         return object;
// //       }
// //     } 
// //   }
// // })
// .run(function ($rootScope, $location, account) {
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route && next.$$route.authenticate && !account.isAuth()) {
//       $location.path('/subjects');
//     }
//   });
// });