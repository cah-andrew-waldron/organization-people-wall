'use strict';

function adminController($scope) {
    var vm = $scope;
    
    $scope.whatever = "BLAH BLAH BLAH";
}

function adminControllerConfig($stateProvider) {
    $stateProvider.state({
        name: 'admin',
        url: '/admin',
        templateUrl: 'scripts/admin/partials/admin.htm',
        controller: 'AdminController',
        controllerAs: 'vm'
    });
}

angular.module('fusewall.controllers')
  .config(['$stateProvider', adminControllerConfig])
  .controller('AdminController', ['$scope', adminController]);
