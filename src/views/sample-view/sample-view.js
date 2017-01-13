angular.module('app').directive('sampleView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'sample-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: function() {}
  }
});
