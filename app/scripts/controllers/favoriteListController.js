'use strict';

/**
 * @ngdoc function
 * @name Kinopoisk.controller:FavoriteListController
 * @description
 * # FavoriteListController
 */
angular.module('Kinopoisk')
  .controller('FavoriteListController', function (FavoriteFilmService, _) {
    this.films = FavoriteFilmService.getFavoriteList();

    this.deleteFilm = function (id) {
      var favoriteFilm = _.findLast(this.films, ['idIMDB', id]);
      this.films = FavoriteFilmService.deleteFilm(favoriteFilm);
    };
  });
