(function() {{
    'use strict';

    angular
        .module('todo-app', [])
        .controller('TodoController', TodoController);

    function TodoController ($scope) {

        /**
         * TODO STATUS:
         * 0 - Not done
         * 1 - Done
         */

        $scope.todoList = [
            {
                id: 1,
                title: 'Learn HTML',
                status: 0
            },
            {
                id: 2,
                title: 'Learn JavaScript',
                status: 0
            },
            {
                id: 3,
                title: 'Sleep',
                status: 1
            }
        ];

        $scope.AddTodo = function() {
            $scope.todoList.push({
                id: $scope.todoList.length + 1,
                title: $scope.newTodo,
                status: 0
            });

            $scope.newTodo = '';
        };

        $scope.DeleteTodo = function(index) {

            $scope.todoList.splice(index, 1);

        };

    }

}})();