angular.module('MyApp.serv', [])
.factory('account', function ($http, $location, $window) {
  return {
    signin : function (user) {
      console.log('Here')
      return $http({
        method: 'POST',
        url: '/api/users/signin',
        data: user
      })
      .then(function (resp) {
        return resp.data.token;
      });
    },
    isAuth : function () {
      return !!$window.localStorage.getItem('token.subjects');
    }
  }
})
