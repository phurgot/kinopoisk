'use strict';

/**
 * @ngdoc function
 * @name Kinopoisk.controller:StatisticController
 * @description
 * # StatisticController
 */
angular.module('Kinopoisk')
  .controller('StatisticController', function(IMDBService, _) {
    this.labels = [];
    this.data = [];
    IMDBService.getTop20()
      .then(function (movies) {
        var array = _.map(movies, function (movie) {
          movie.decade = movie.year.substring(0,3) + '0s';
          return movie;
        });
        var tmp = _.groupBy(_.sortBy(array, 'year'), 'decade');
        _.forEach(tmp, function (val, key){
          this.labels.push(key);
          this.data.push(val.length);
        }.bind(this));
      }.bind(this));
  });
