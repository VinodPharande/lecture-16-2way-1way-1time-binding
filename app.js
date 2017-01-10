(function(){
  'use strict';

  angular.module('BindingApp', [])
  .controller('BindingController', BindingController);
  BindingController.$inject = ['$scope'];

  function BindingController($scope) {
    $scope.firstName = "Vinod";
    // $scope.fullName = "";

    $scope.showNumberOfWatchers = function () {
      console.log("# of Watchers: ", $scope.$$watchersCount);
    };

    $scope.setFullName = function () {
       $scope.fullName = $scope.firstName + " " + "Pharande";
    };

    $scope.logFirstName = function () {
      console.log("First Name is: ", $scope.firstName);
    };

    $scope.logFulltName = function () {
      console.log("Full Name is: ", $scope.fullName);
    };
  };
})();

// digest cycle does not get triggered automatically if evenets are unware of angular i.e. non-angular context / javascript native functions
// Solution:
// 1. Call $digest after your custom code
// 2. Wrap your cutosm code inside of $apply
// 3. find Angular specific service that handles the same functionality e.g. $timeout
