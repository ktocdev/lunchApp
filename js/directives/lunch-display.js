myApp.directive('userButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: false,
    templateUrl: '/templates/lunch-display.html',
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});