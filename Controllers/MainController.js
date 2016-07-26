


angular
    .module('ChoreBoardApp')
    .controller('MainController', MainController);


MainController.$inject = ['$scope'];



function MainController($scope) {
    var vm = this;



    vm.toDos = [];
 
  
    vm.addItem = function () {
        
        /*dont allow duplicat items to bo added*/
        var preExisting = vm.toDos.find(function(todo){ 
            return todo.title === vm.newItem;
        });
        var isPreExisting = typeof(preExisting) !== 'undefined';
            if (!$scope.formX.$valid || isPreExisting) {
            /*if item has already been added show alert message to user*/
                alert('YOU CANNOT ADD DUPLICAT CHORES TO THE BOARED!');
         }else {
           
           /*else add the item to the boared*/
            vm.toDos.push({ title: vm.newItem });
           
            /*clear the input field*/
            vm.newItem = " ";
        }
     };
   
   
    /*delete chore*/
    vm.removeItem = function (index) {
        vm.toDos.splice(index, 1);
    };

    vm.clearAll = function () {
        vm.toDos.length = 0;
    }
};











