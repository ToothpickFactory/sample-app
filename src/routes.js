angular.module('app').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('sample', {
      url: '/sample',
      template: '<sample-page></sample-page>'
    })

  $urlRouterProvider.otherwise('/sample');

});
