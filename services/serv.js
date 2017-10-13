angular.module('MyApp.serv', [])
.factory('account', function ($http, $location, $window) {
  return {
    signin : function (user) {
      var creadantials = {}
     creadantials['username'] = $window.localStorage.getItem('username');
     creadantials['password'] = $window.localStorage.getItem('password'); 
     return creadantials
    },
    isAuth : function () {
      return !!$window.localStorage.getItem('token.subjects');
    }
  }
})
