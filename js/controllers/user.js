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
        "lunch": ""
    },{
    	  "name": "Roberto",
        "pic": "roberto.png",
        "lunch": ""
    },{
        "name": "Whitney",
        "pic": "whitney.jpg",
        "lunch": ""
    }];

    //$scope.selectUser = '';

    $scope.userSelect = function(index) {
        alert('you clicked ' + index);
    }

}]);