/// <reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"/>

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.htm"
        })
        .when("/home", {
            templateUrl : "View/home.html"
        })
        .when("/add", {
            templateUrl : "View/add.html",
            controller:"Employees"
        })
        .otherwise({
            redirectTo:"/home"
        })

});
app.controller('Employees',function($scope,$http){
    $scope.insertData = function(){
        $http.post("http://localhost/Monitorizarea%20Angajatilor/Scripts/db/insert.php",
            {'nume':$scope.nume,'prenume':$scope.prenume,'CNP':$scope.CNP})
            .then(function (data) {
                alert(data);
            })
    }
});