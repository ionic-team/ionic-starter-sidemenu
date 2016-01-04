/*!
 * Ionic - Side menu Starter App
 * MIT Licensed
 */

'use strict';

angular.module('starter')
  .controller('AppCtrl', function(
    $log,         // inject the $log service
    $scope,       // inject the $scope service
    $ionicModal,  // inject the $ionicModal service
    $timeout      // inject the $timeout service
  ) {

    $log.info('AppCtrl');

    $scope.$on('$ionicView.beforeEnter', function() {
      // The view has fully entered and is now the active view.
      // This event will fire, whether it was the first load or a cached view.
      $log.info('AppCtrl - $ionicView.beforeEnter');
    });

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('PlaylistCtrl', function($log) {
    $log.info('PlaylistCtrl');
  });





