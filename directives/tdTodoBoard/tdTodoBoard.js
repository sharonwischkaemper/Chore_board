angular
    .module('ChoreBoardApp')
    .directive('tdTodoBoard', tdTodoBoard);

tdTodoBoard.$inject = [];

function tdTodoBoard() {
    return {
        restrict: 'E',
        templateUrl: 'directives/tdTodoBoard/tdTodoBoard.html',
        scope: {
            board: '='
        },
        link: function(scope, ele, attr) {
            scope.todos = [];
            scope.addItem = '';

            scope.addTodo = function() {
                scope.todos.push({ title: scope.addItem });
                scope.addItem = '';
            }
            scope.deleteTodo = function(index){
                scope.todos.splice(index, 1);
 
       }
     }
    };
}


 
 