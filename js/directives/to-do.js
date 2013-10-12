myApp.directive('todo', function () {
	return {
		restrict: 'A',
		replace: true,
		transclude: false,
		templateUrl: 'templates/todo-item.html',
		link: function (scope, element, attrs) {
		}
	};
});