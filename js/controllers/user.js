myApp.controller('UserCtrl', ['$scope', function ($scope) {
    $scope.userInfo = {};
    $scope.userInfo.users = [{
        "name": "Charlie",
        "pic": "charlie.png",
        "lunch": ""
    },{
        "name": "Katie",
        "pic": "katie.jpg",
        "lunch": ""
    },{
        "name": "Lola",
        "pic": "lola.jpg",
        "lunch": "noodles"
    },{
    	  "name": "Roberto",
        "pic": "roberto.png",
        "lunch": ""
    },{
        "name": "Whitney",
        "pic": "whitney.jpg",
        "lunch": ""
    }];

    $scope.myLunch = "";

    $scope.submitLunch = function(index,myLunch) {
      $scope.userInfo.users[index].lunch = myLunch;
    }

    $scope.isLunchSelected = function(index) {
      if ($scope.userInfo.users[index].lunch.length > 0){
        return true;
      };
    }

}]);