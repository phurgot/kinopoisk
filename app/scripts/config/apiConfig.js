'use strict';

/**
 * @ngdoc constant
 * @name Kinopoisk.API_ENDPOINT
 * @description
 * # API_ENDPOINT
 * Defines the API endpoint where our resources will make requests against.
 * Is used inside /services/ApiService.js to generate correct endpoint dynamically
 */


angular.module('Kinopoisk')

  // development
  .constant('API_CONFIG', {
    host: 'http://www.myapifilms.com/imdb/',
    token: '1c772155-c511-4fdd-a637-9a3aaa8ddb0c'
  });
