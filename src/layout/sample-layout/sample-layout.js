angular.module('app').directive('sampleLayout', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'sample-layout.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: function() {}
  }
});
