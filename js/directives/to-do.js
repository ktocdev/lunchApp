myApp.directive('todo', function () {
	return {
		restrict: 'A',
		replace: true,
		transclude: false,
		templateUrl: 'templates/todoitem.html',
		link: function (scope, element, attrs) {
		}
	};
});