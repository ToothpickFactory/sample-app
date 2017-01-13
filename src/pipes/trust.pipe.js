angular.module('cstep').filter("trust", function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
});
