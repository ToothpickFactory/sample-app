angular.module('app').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('sample', {
      url: '/sample',
      template: '<sample-page></sample-page>'
    })
		.state('sample.sampleView', {
      url: '/sampleView',
      template: '<sample-view></sample-view>'
    })

  $urlRouterProvider.otherwise('/sample');

});
