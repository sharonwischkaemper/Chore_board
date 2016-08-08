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
            scope.chores = [];
            scope.addChore = '';

            scope.addChore = function() {
                 if(!scope. ch ||scope.ch.trim().length < 1){
            alert('You must supply a chore for the board');
            return;
        }
                scope.chores.push(scope.ch );
                scope.ch = '';
            }
            scope.deleteChore = function(index){
                scope.chores.splice(index,1);
 
       }
     }
    };
}


 
 