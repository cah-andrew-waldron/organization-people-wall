'use strict';

function adminController($scope) {
    $scope.whatever = "this is a test";
}

function adminControllerConfig($stateProvider) {
    $stateProvider.state({
        name: 'admin',
        templateUrl: 'admin/partials/admin.htm',
        url: '/admin',
        controller: 'AdminController',
        controllerAs: 'vm'
    });
}

angular.module('fusewall.controllers')
  .config(['$stateProvider', adminControllerConfig])
  .controller('AdminController', ['$scope', adminController]);
