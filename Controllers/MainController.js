


angular
    .module('ChoreBoardApp')
    .controller('MainController', MainController);


MainController.$inject = ['$scope'];



function MainController($scope) {
    var vm = this;



    vm.boards = [];
  
    vm.createNewBoard = function () {
        
          /*make sure the boared has a title*/
        if(!vm.createBoard || vm.createBoard.trim().length < 1){
            alert('You must supply a name for the board');
            return;
        }
      
        /*dont allow duplicat items to bo added*/
        var preExisting = vm.boards.find(function(board){ 
            return board === vm.createBoard;
        });
        var isPreExisting = typeof(preExisting) !== 'undefined';
            if (!$scope.BoaredForm.$valid || isPreExisting) {
            /*if item has already been added show alert message to user*/
                alert('THIS BOARD ALREADY EXISTS!!');
         }else {
           
           /*else add the item to the boared*/
            vm.boards.push(vm.createBoard);
           
            /*clear the input field*/
            vm.createBoard = " ";
        }
     };
   
   
    /*delete chore*/
    vm.removeBoard = function(index) {
        vm.boards.splice(index,1);
    };

//     vm. = function () {
//         vm.createBoard.length = 0;
//     };

    vm.clearAllBroards = function (){
        vm.boards.length = 0;
};          



}