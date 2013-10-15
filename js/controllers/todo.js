myApp.controller('TodoCtrl', ['$scope', function ($scope) {
  $scope.todoList = {};
  $scope.todoList.todos = [{
      "todoitem": "figure out backend"
    },{
      "todoitem": "add/edit todos"
    },{
      "todoitem": "consider making animation jquery and then setting a callback to show controls"
    }];

}]);
