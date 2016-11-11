'use strict';

function appRoutingConfig($locationProvider) {
  $locationProvider.hashPrefix('!');
}

angular.module('fusewall', ['ui.router', 'fusewall.controllers'])
  .config(['$locationProvider', appRoutingConfig]);

angular.module('fusewall.controllers', ['ui.router']);
