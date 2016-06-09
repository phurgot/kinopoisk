'use strict';

/**
 * @ngdoc overview
 * @name Kinopoisk
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('Kinopoisk', ['ionic', 'ngCordova', 'ngResource', 'chart.js', 'ngStorage'])

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.interceptors.push(function($rootScope) {
      return {
        'request': function(config) {
          $rootScope.$broadcast('showLoading');
          return config;
        },

        'response': function(response) {
          $rootScope.$broadcast('hideLoading');
          return response;
        },
        'responseError': function(rejection) {
          $rootScope.$broadcast('hideLoading');
          return rejection;
        }
      };
    });

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/top-list.html',
            controller: 'TopListController',
            controllerAs: 'topList'
          }
        }
      })
      .state('app.statistic', {
        url: '/statistic',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/statistic.html',
            controller: 'StatisticController',
            controllerAs: 'statistic'
          }
        }
      })
      .state('app.favorite', {
        url: '/favorite',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/favorite.html',
            controller: 'FavoriteListController',
            controllerAs: 'favoriteList'
          }
        }
      });

    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  });


