myApp.directive('userButton', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    templateUrl: '/templates/user-button.html',
    link: function (scope, element, attrs) {

			scope.lunchSelected = function(index) {
		    if (scope.userInfo.users[index].lunch){
		      return true;
		    };
		  }

		  /* returns true if there is a value in the lunch property for a given user (based on index),
    	   this is passed to the directive ng-show on the 'Lunch Choice' label. if it true, it shows. */
    	   //-----------//

      scope.selectedUser = function (index) {
      	if (scope.somethingsSelected == true){ // if user is already selected
      		animateOn(); // animateOn all user-buttons
      		scope.somethingsSelected = !scope.somethingsSelected; // unselects users-button
      	} else {
      		animateOff(index); // animateOff all user-buttons but selected
      		for (i = 0; i <= scope.userInfo.users.length; i++ ){
						if (i == index){ // compares the user-button's index with the user array and toggles it if they match
							scope.somethingsSelected = !scope.somethingsSelected; // selects clicked user-button
						}
					}
      	}
			};

			/* ng-click calls this function on user-button to toggle visibility it's corresponding input area.
			*/
    	   //-----------//

		  scope.submitLunch = function(index,lunch) {
		    scope.userInfo.users[index].lunch = lunch; // sets lunch to the user in user array
		    scope.close();
		  }

		  /* ng-click calls this function on the 'Submit' button.
				 the input is the ng-model 'lunch'. the data is sent to the user array. it is related through the button's index.
				 the close function hides the corresponding input area
		  */
    	   //-----------//

			scope.close = function () {
		    scope.somethingsSelected = !scope.somethingsSelected; // removes selected state
		    animateOn(); //shows other user-buttonss
			};

			/* the ng-click directive close hides the selected user-button's corresponding input area and shows all user-buttons
			*/
    	   //-----------//

			function animateOff(index){
				for (i = 0; i <= scope.userInfo.users.length; i++ ){
					if (i != index){ // compares the user-button's index with the user array and hides it if they don't match
						element.parent().parent().children().eq(i+1).addClass('animateOff');
					}
				}
			}

			/* 	the class 'animateOff' sets the non-selected user-button's position: left off the screen.
					with css3 animate they appear to slide off and on screen
			*/
    	   //-----------//

			function animateOn(){
				element.parent().parent().children().removeClass('animateOff'); //
			}

			/* by removing the 'animateOff' class from all user-buttons,
			   all off screen user-buttons will slide back to left: auto;
			*/
    	   //-----------//

		}
	}
});