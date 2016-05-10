(function () {
    'use strict';
    angular
            .module('serviceOrder')
            .controller('PersonFormController', PersonFormController);

    /** @ngInject */
    function PersonFormController($scope, $state, $stateParams, PersonService) {
        var vm = this;

        vm.initialize = function () {
            mainUsers.person = {};
            if ($stateParams.idPerson) {
                mainUsers.loadingPerson($stateParams.idPerson);
            }
        };

        vm.goHome = function () {
            alert('Register succesfull');
            $state.go('home');
        };

        vm.alertingError = function () {
            alert('Error occurred!!');
        };

        vm.loadingPerson = function (id) {
            PersonService.loadPersonId(id).then(function (response) {
                mainUsers.person = response.data;
            }, function (erro) {
                alert(erro);
            });
        };

        vm.save = function (person) {
            if (person.id) {
                PersonService.editPerson(person);
            } else {
                PersonService.savePerson(person);
            }
        };

        $scope.$on('personServiceAddSuccess', function () {
            vm.goHome();
        });
        $scope.$on('personServiceAddError', function () {
            vm.alertingError();
        });
        $scope.$on('personServiceEditSuccess', function () {
            vm.goHome();
        });
        $scope.$on('personServiceEditError', function () {
            vm.alertingError();
        });

    }
})();
