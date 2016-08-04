


angular
    .module('ChoreBoardApp')
    .controller('MainController', MainController);


MainController.$inject = ['$scope'];



function MainController($scope) {
    var vm = this;



    vm.boards = [];
  
    vm.createNewBoard = function () {
        
        /*dont allow duplicat items to bo added*/
        var preExisting = vm.boards.find(function(board){ 
            return board === vm.createBoard;
        });
        var isPreExisting = typeof(preExisting) !== 'undefined';
            if (!$scope.BoaredForm.$valid || isPreExisting) {
            /*if item has already been added show alert message to user*/
                alert('YOU CANNOT ADD DUPLICAT CHORES TO THE BOARED!');
         }else {
           
           /*else add the item to the boared*/
            vm.boards.push(vm.createBoard );
           
            /*clear the input field*/
            vm.createBoard = " ";
        }
     };
   
   
    /*delete chore*/
    vm.removeBoard = function(index) {
        vm.boards.splice(index, 1);
    };

//     vm. = function () {
//         vm.createBoard.length = 0;
//     };

    vm.clearAllBroards = function (){
        vm.boards.length = 0;
};          

}