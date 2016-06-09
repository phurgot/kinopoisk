'use strict';

/**
 * @ngdoc function
 * @name Kinopoisk.controller:TopListController
 * @description
 * # TopListController
 */
angular.module('Kinopoisk')
  .controller('TopListController', function ($scope, $sce, IMDBService, FavoriteFilmService, $ionicModal, _) {

    this.films = [];

    IMDBService.getTop20()
      .then(function (movies) {
        this.films = movies;
      }.bind(this));

    $ionicModal.fromTemplateUrl('templates/modals/player.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      this.modal = modal;
    }.bind(this));

    this.openTrailer = function (videoUrl) {
        this.videoURL = $sce.trustAsResourceUrl(videoUrl);
        this.modal.show();
    };

    this.closeModal = function () {
      this.modal.hide();
      this.modal.modalEl.querySelector('#player').pause();
    };

    $scope.$on('$destroy', function () {
      this.modal.remove();
    });

    var favoriteFilms = FavoriteFilmService.getFavoriteList();

    this.addToFavorite = function (film) {
      var favoriteFilm = this.isFavorite(film.idIMDB);
      if (angular.isDefined(favoriteFilm)) {
        favoriteFilms = FavoriteFilmService.deleteFilm(favoriteFilm);
      } else {
        favoriteFilms = FavoriteFilmService.addFilm(film);
      }
    };

    this.isFavorite = function (id) {
      return _.findLast(favoriteFilms, ['idIMDB', id]);
    };
  });
