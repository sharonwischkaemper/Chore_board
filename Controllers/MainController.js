angular
    .module('MyApp')
    .controller('MainController', MainController);


MainController.$inject = [];



function MainController() {
    var vm = this;

    vm.toDos = [];

    vm.addItem = function () {
        vm.toDos.push(vm.newItem);
        vm.newItem = '';
    };


    vm.removeItem = function (index) {
        vm.toDos.splice(index, 1);
    };

    vm.clearAll = function () {
        vm.toDos.length = 0;
    }

  
}

   
     
        

