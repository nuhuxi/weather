/**
 * Created by mark07 on 5/19/15.
 */
/**
 * Created by mark07 on 5/18/15.
 */
(function(){
  angular.module('app.component')
    .directive('mgkSearchBox', function(){
      return {
        templateUrl: "./app/component/search-form.html",
        controller: searchBoxCtrlFn
      }
    });
  function searchBoxCtrlFn($scope) {
    $scope.search = function(searchStr) {
      $scope.$emit('search', {str: searchStr});
    }
  }
})();