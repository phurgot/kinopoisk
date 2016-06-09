angular.module("Kinopoisk").run(["$templateCache", function($templateCache) {$templateCache.put("templates/main.html","<ion-side-menus>\n    <!-- Center content -->\n    <ion-side-menu-content>\n\n        <ion-nav-view name=\"viewContent\">\n\n        </ion-nav-view>\n    </ion-side-menu-content>\n\n    <!-- Left menu -->\n    <ion-side-menu side=\"left\" class=\"side-menu\">\n\n        <ion-header-bar align-title=\"center\" class=\"bar-positive\">\n            <h1 class=\"title\">Side Menu</h1>\n        </ion-header-bar>\n\n        <ion-content class=\"has-header\">\n            <div class=\"list\">\n                <a menu-close class=\"item item-icon-left\" ui-sref-active=\"active\" ui-sref=\"app.home\">\n                    <i class=\"icon ion-ios-film\"></i>\n                    Top 20 the best films\n                </a>\n                <a menu-close class=\"item item-icon-left\" ui-sref-active=\"active\" ui-sref=\"app.statistic\">\n                    <i class=\"icon ion-stats-bars\"></i>\n                    Statistic\n                </a>\n                <a menu-close class=\"item item-icon-left\" ui-sref-active=\"active\" ui-sref=\"app.favorite\">\n                    <i class=\"icon ion-film-marker\"></i>\n                    Favorite\n                </a>\n            </div>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("templates/modals/player.html","<ion-modal-view>\n  <ion-header-bar>\n    <h1 class=\"title modal__title\">Video</h1>\n    <button class=\"button button-right button-icon ion-ios-close\" ng-click=\"topList.closeModal()\"></button>\n  </ion-header-bar>\n  <ion-content>\n\n    <div class=\"video-box\">\n      <video id=\"player\" ng-src=\"{{topList.videoURL}}\" class=\"centerme\" controls=\"controls\" autoplay></video>\n    </div>\n  </ion-content>\n</ion-modal-view>\n");
$templateCache.put("templates/views/favorite.html","<ion-view>\n  <ion-header-bar align-title=\"center\" class=\"bar-positive\">\n    <button class=\"button button-icon icon ion-navicon\" menu-toggle=\"left\"></button>\n    <h1 class=\"title\">Favorite movies</h1>\n  </ion-header-bar>\n\n  <ion-content>\n    <ion-list>\n      <ion-item class=\"movie\" ng-repeat=\"film in favoriteList.films\">\n        <div class=\"row\">\n          <div class=\"col col-33\">\n            <img class=\"movie__poster\" ng-src=\"{{::film.urlPoster}}\" alt=\"{{::film.title }}\">\n          </div>\n          <div class=\"col col-67\">\n            <h2 class=\"movie__title\" ng-bind=\"::film.title\"></h2>\n            <p class=\"movie__label\" ng-bind=\"::film.year\"></p>\n            <p class=\"movie__label\" ng-bind=\"::film.rating\"></p>\n            <span class=\"movie__label\">Genre:</span>\n            <ul class=\"movie__list\">\n              <li class=\"movie__list-item\"  ng-repeat=\"genre in ::film.genres\" ng-bind=\"::genre\"></li>\n            </ul>\n            <span class=\"movie__label\">Country:</span>\n            <ul class=\"movie__list\">\n              <li class=\"movie__list-item\" ng-repeat=\"country in ::film.countries\" ng-bind=\"::country\"></li>\n            </ul>\n            <span class=\"movie__label\">Director:</span>\n            <ul class=\"movie__list\">\n              <li class=\"movie__list-item\">\n                <a href=\"{{::\'http://www.imdb.com/name/\' + director.id}}\" ng-repeat=\"director in ::film.directors\" ng-bind=\"::director.name\"></a>\n              </li>\n            </ul>\n            <button class=\"button button-full button-assertive\"\n                    ng-click=\"favoriteList.deleteFilm(film.idIMDB)\">It\'s no my favorite</button>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-view>\n");
$templateCache.put("templates/views/statistic.html","<ion-view>\n    <ion-header-bar align-title=\"center\" class=\"bar-positive\">\n    <button class=\"button button-icon icon ion-navicon\" menu-toggle=\"left\"></button>\n        <h1 class=\"title\">Statistic</h1>\n    </ion-header-bar>\n\n    <ion-content>\n      <canvas id=\"doughnut\" class=\"chart chart-doughnut\"\n              chart-data=\"statistic.data\" chart-labels=\"statistic.labels\">\n      </canvas>\n    </ion-content>\n\n</ion-view>\n");
$templateCache.put("templates/views/top-list.html","<ion-view>\n  <ion-header-bar align-title=\"center\" class=\"bar-positive\">\n    <button class=\"button button-icon icon ion-navicon\" menu-toggle=\"left\"></button>\n    <h1 class=\"title\">Top 20</h1>\n  </ion-header-bar>\n\n  <ion-content>\n    <ion-list>\n      <ion-item class=\"movie\" ng-repeat=\"film in topList.films\">\n        <div class=\"row\">\n          <div class=\"col col-33\">\n            <img class=\"movie__poster\" ng-src=\"{{::film.urlPoster}}\" alt=\"{{::film.title }}\">\n          </div>\n          <div class=\"col col-67\">\n            <h2 class=\"movie__title\" ng-bind=\"::film.title\"></h2>\n            <p class=\"movie__label\" ng-bind=\"::film.year\"></p>\n            <p class=\"movie__label\" ng-bind=\"::film.rating\"></p>\n              <span class=\"movie__label\">Genre:</span>\n              <ul class=\"movie__list\">\n                <li class=\"movie__list-item\"  ng-repeat=\"genre in ::film.genres\" ng-bind=\"::genre\"></li>\n              </ul>\n              <span class=\"movie__label\">Country:</span>\n              <ul class=\"movie__list\">\n                <li class=\"movie__list-item\" ng-repeat=\"country in ::film.countries\" ng-bind=\"::country\"></li>\n              </ul>\n              <span class=\"movie__label\">Director:</span>\n              <ul class=\"movie__list\">\n                <li class=\"movie__list-item\">\n                  <a href=\"{{::\'http://www.imdb.com/name/\' + director.id}}\" ng-repeat=\"director in ::film.directors\" ng-bind=\"::director.name\"></a>\n                </li>\n              </ul>\n            <button class=\"button button-balanced movie__btn\"\n                    ng-repeat=\"quality in ::film.trailer.qualities\"\n                    ng-click=\"topList.openTrailer(quality.videoURL)\"\n                    ng-bind=\"::quality.quality\">\n            </button>\n            <button\n              class=\"button button-icon icon  movie__favorite {{topList.isFavorite(film.idIMDB) ? \'ion-ios-star\':\'ion-ios-star-outline\'}}\"\n              ng-click=\"topList.addToFavorite(film)\"></button>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-view>\n");}]);