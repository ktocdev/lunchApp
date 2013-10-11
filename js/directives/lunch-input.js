myApp.directive('lunch-input', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: false,
    templateUrl: '/templates/lunch-input.html',
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});