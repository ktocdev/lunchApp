myApp.directive('userButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    templateUrl: '/templates/user-button.html',
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});