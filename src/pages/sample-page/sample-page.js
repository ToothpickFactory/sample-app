angular.module('app').directive('samplePage', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'sample-page.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: function() {}
  }
});
