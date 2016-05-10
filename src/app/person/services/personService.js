(function () {
    'use strict';
    angular
            .module('serviceOrder')
            .factory('PersonService', PersonService);

    /** @ngInject */
    function PersonService($http, $rootScope) {
        return {
            savePerson: function (person) {
                $http.post('/ServiceOrderServer/service-order/person', angular.toJson(person)).then(function (response){
                    $rootScope.$broadcast('personServiceAddSuccess', response.data);
                }, function (error){
                    $rootScope.$broadcast('personServiceAddError', error);
                });
            }
        };
    }
})();
