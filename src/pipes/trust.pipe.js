angular.module('app').filter("trust", function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
});
