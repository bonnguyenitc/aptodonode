var app = angular.module("app.todos",["xeditable"]);

app.controller("todoController",['$scope','svTodo', function($scope, svTodo){
    $scope.appName = "Dashboard TODO";
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;
    // load data from api
    svTodo.get().then(function(success){
        $scope.todos = success.data;   
        $scope.loading = false;   
    }).then(function(err){
        console.log(err);
        
    });
    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text : $scope.formData.text,
            isDone: false
        }
        svTodo.create(todo).then(function(success){
            $scope.todos = success.data;    
            $scope.formData.text = "";  
            $scope.loading = false;
        }).then(function(err){
            console.log(err); 
        });
        
    }

    $scope.updateTodo = function (todo){
        $scope.loading = true;
        svTodo.update(todo).then(function(success){
            $scope.todos = success.data;      
            $scope.loading = false;
        }).then(function(err){
            console.log(err); 
        });
        
    }
    $scope.deleteTodo = function (todo) {
        console.log("delete :", todo);
        $scope.loading = true;
        svTodo.delete(todo._id)
        .then(function(success){
            $scope.todos = success.data;      
            $scope.loading = false;
        }).then(function(err){
            console.log(err); 
        });
    }
}]);    
