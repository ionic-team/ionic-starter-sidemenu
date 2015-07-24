/*!
 * Ionic - Side menu Starter App
 * MIT Licensed
 */

'use strict';

angular.module('starter', [
  'ionic'  // inject the Ionic framework
  // 'starter.controllers'
])

  .config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

    $ionicConfigProvider.views.maxCache(10);                     // the default is 10
    $ionicConfigProvider.views.transition('platform');
    $ionicConfigProvider.views.forwardCache(false);              // the default is false
    $ionicConfigProvider.backButton.icon('ion-ios-arrow-back');
    $ionicConfigProvider.backButton.text('');                    // default is 'Back'
    $ionicConfigProvider.backButton.previousTitleText(false);    // hides the 'Back' text
    $ionicConfigProvider.templates.maxPrefetch(20);

    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl',
        abstract: true
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })

      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/{playlistId}',  // {} supports regex
        views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
  })

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

    });
  });
