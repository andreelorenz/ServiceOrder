(function() {
  'use strict';

  angular
    .module('serviceOrder')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state('home', {
                            url: '/',
                            templateUrl: 'app/partials/home.html',
                            controller: 'MainController',
                            controllerAs: 'main'
                        })
                        .state('mainUsers', {
                            url: '/mainUsers',
                            templateUrl: 'app/partials/mainUsers.html',
                            controller: 'UsersController',
                            controllerAs: 'mainUsers'
                        })
                        .state('mainOs', {
                            url: '/mainOs',
                            templateUrl: 'app/partials/mainOs.html',
                            controller: 'MainOsController',
                            controllerAs: 'mainOs'
                        })
                        .state('myOs', {
                            url: '/myOs',
                            templateUrl: 'app/partials/myOs.html',
                            controller: 'OsController',
                            controllerAs: 'myOs'
                        });

    $urlRouterProvider.otherwise('/');
  }

})();
