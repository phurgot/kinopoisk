'use strict';

/**
 * @ngdoc function
 * @name Kinopoisk.controller:MainController
 * @description
 * # MainController
 */
angular.module('Kinopoisk')
  .controller('MainController', function($scope, $ionicLoading) {

    $scope.$on('hideLoading', function () {
      $ionicLoading.hide();
    });

    $scope.$on('showLoading', function () {
      $ionicLoading.show();
    });

  });
