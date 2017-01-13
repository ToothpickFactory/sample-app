angular.module('cstep').directive('sampleComp', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'sample-comp.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: function() {}
  }
});
