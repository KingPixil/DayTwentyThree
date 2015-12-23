var myApp = angular.module('DemoApp', ['firebase']);

myApp.constant("FIREBASE_URL", "https://douob.firebaseio.com/" );


function DemoCtrl($scope, $firebase, FIREBASE_URL) {

    // Get Stored TODOs
    var dOUOb = new Firebase(FIREBASE_URL);
    $scope.todos = $firebase(dOUOb);




    // Remove a Todo
    $scope.removeItem   = function (index, item, event) {

       // Avoid wrong removing
       if (item.id == undefined)return;

       // Firebase: Remove item from the list
       $scope.todos.$remove(item.id);

    };



    // Add new TODO
    $scope.addItem  = function () {

        // Create a unique ID
        var timestamp = new Date().valueOf();

        // Get the Firebase reference of the item
        var itemRef = new Firebase(FIREBASE_URL + timestamp);

        $firebase(itemRef).$set({
            id: timestamp,
            name : $scope.todoName,
            description: $scope.todoDescription
        });

        $scope.todoName = "";
        $scope.todoDescription = "";

    };


}