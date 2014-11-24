(function(){
  var app = angular.module('gasep2014yearbook', []);

  app.controller('YearbookController', function($scope){
    $scope.students = students;
    $scope.instructors = instructors;
    $scope.selectStudents = function(students) {
      $scope.selectedStudents = students;
    }
  })
  var students = [
    {
      name: 'Ife'
    },
    {
      name: 'Beth'
    },
    {
      name: 'Nina'
    },
    {
      name: 'Ben C'
    },
    {
      name: 'Oli'
    },
    {
      name: 'Dave'
    },
    {
      name: 'George'
    },
    {
      name: 'Dom'
    },
    {
      name: 'Jody'
    },
    {
      name: 'Jacob'
    },
    {
      name: 'Ian'
    },
    {
      name: 'Laura'
    },
    {
      name: 'Lulu'
    },
    {
      name: 'Ben S'
    }
  ]
  var instructors = [
    {
      name: 'Gerry'
    },
    {
      name: 'Mathilda'
    },
    {
      name: 'Tobias'
    },
    {
      name: 'Dave'
    }
  ]
})();