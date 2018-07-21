/// <reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"/>
var app = angular.module("Employee", ['']);
app.controller('Employees',function($scope,$http){
 $scope.insertdata = function(){
  $http.post("db/insert.php",{'nume':$scope.nume,'prenume':$scope.prenume,'CNP':$scope.CNP})
      .$$success(function () {
          $scope.message="Datele au fost inserate";
      })   
 }
});
