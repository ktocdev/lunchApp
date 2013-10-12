myApp.controller('UserCtrl', ['$scope', function ($scope) {
    $scope.userInfo = {};
    $scope.userInfo.users = [{
        "name": "Charlie",
        "pic": "charlie.png",
        "lunch": ""
    },{
        "name": "Katie",
        "pic": "katie.jpg",
        "lunch": "salad"
    },{
        "name": "Lola",
        "pic": "lola.jpg",
        "lunch": "soup"
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

}]);