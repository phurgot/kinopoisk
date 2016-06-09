'use strict';

/**
 * @ngdoc service
 * @name Kinopoisk.FavoriteFilmService
 * @description
 * # FavoriteFilmService
 *
 * Usage example: FavoriteFilmService.addFilm(film)
 *
 */
angular.module('Kinopoisk')
  .factory('FavoriteFilmService', function ($localStorage, _) {

    $localStorage.favoriteFilms = $localStorage.favoriteFilms || [];

    var deleteItem = function (item) {
      var index = _.findIndex($localStorage.favoriteFilms, item);
      $localStorage.favoriteFilms.splice(index,1);
      return $localStorage.favoriteFilms;
    };

    var addItem = function (item) {
      $localStorage.favoriteFilms.push(item);
      return $localStorage.favoriteFilms;
    };


    var getFavoriteList = function () {
      return $localStorage.favoriteFilms;
    };

    // public api
    return {
      addFilm: addItem,
      deleteFilm: deleteItem,
      getFavoriteList: getFavoriteList
    };

  });

