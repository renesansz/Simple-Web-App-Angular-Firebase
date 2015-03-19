(function() {

    'use strict';

    angular
        .module('chat-app.controllers')
        .controller('ChatController', ChatController);

    function ChatController($scope, $firebaseArray) {

        var ref = new Firebase('https://simpletodoapp.firebaseio.com/');

        $scope.messages = $firebaseArray(ref);

        $scope.SendMessage = function() {

            if ($scope.msgSender.length > 3 && $scope.msgBody.length)
                $scope.messages.$add({ from: $scope.msgSender, body: $scope.msgBody });

            // Reset entry
            $scope.msgBody = '';

        };

    }

})();