'use strict';

/**
 * @ngdoc function
 * @name Kinopoisk.service:IMDBService
 * @description
 * # Service for work with api
 */
angular.module('Kinopoisk')
  .factory('IMDBService', function(API_CONFIG, $http) {

    function getTop20() {
      return $http({
        method: 'GET',
        url: '/imdb/top.json'
      }).then(function (response) {
        return response.data.data.movies;
      });
    }
    // public api
    return {
      getTop20: getTop20
    };

  });
