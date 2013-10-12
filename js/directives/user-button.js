myApp.directive('userButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: false,
    templateUrl: '/templates/user-button.html',
    link: function (scope, element, attrs) {

      scope.on = false;

      scope.toggle = function () {
			  scope.on = !scope.on;
			};

			scope.lunchSelected = function(index) {
		    if (scope.userInfo.users[index].lunch){
		      return true;
		    };
		  }
				
 		}
	}
});