myApp.directive('userButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    templateUrl: '/templates/user-button.html',
    link: function (scope, element, attrs) {

      scope.on = false;
			scope.somethingsSelected = false;

      scope.toggle = function () {
			  scope.on = !scope.on;
			};

			scope.lunchSelected = function(index) {
		    if (scope.userInfo.users[index].lunch){
		      return true;
		    };
		  }

      scope.selectedUser = function () {
      	for (i = 0; i <= scope.userInfo.users.length; i++ ){
      		scope.somethingsSelected = !scope.somethingsSelected;
					if (i == index){
						scope.somethingsSelected = !scope.somethingsSelected;
					} 
				}
			};

		}
	}
});