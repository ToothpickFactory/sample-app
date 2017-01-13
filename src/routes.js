angular.module('cstep').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('sample', {
      url: '/sample',
      template: '<sample-page></sample-page>'
    })

  $urlRouterProvider.otherwise('/sample');

});
