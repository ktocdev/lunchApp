myApp.directive('userButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    templateUrl: '/templates/user-button.html',
    link: function (scope, element, attrs) {

			scope.lunch = "";
			scope.somethingsSelected = false;

			scope.lunchSelected = function(index) {
		    if (scope.userInfo.users[index].lunch){ // if lunch has a value, return true
		      return true;
		    };
		  }

		  scope.submitLunch = function(index,lunch) {
		    scope.userInfo.users[index].lunch = lunch; // sets lunch in data array 
		    scope.close();
		  }

      scope.selectedUser = function (index) {
      	if (scope.somethingsSelected == true){
      		scope.somethingsSelected = !scope.somethingsSelected;
      		animateOn();
      	} else {
      		animateOff(index);
      		for (i = 0; i <= scope.userInfo.users.length; i++ ){
	      		scope.somethingsSelected = !scope.somethingsSelected;
						if (i == index){
							scope.somethingsSelected = !scope.somethingsSelected;
						} 
					}
      	}
			};

			scope.close = function () {
		    scope.somethingsSelected = !scope.somethingsSelected; // removes selected state
		    animateOn(); //shows other users
			};

			function animateOff(index){
				for (i = 0; i <= scope.userInfo.users.length; i++ ){
					if (i != index){
						element.parent().parent().children().eq(i+1).addClass('animateOff');
					}
				}
			}

			function animateOn(){
				element.parent().parent().children().removeClass('animateOff')
			}

		}
	}
});