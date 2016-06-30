'use strict';
angular.module('main')
    .controller('ChildrenCtrl', function($scope, $ionicModal) {

        var vm = this;

        vm.children = [{
            name: 'Henry'
        }];

        vm.newChild = function() {
            vm.modal.show();
        }

        $ionicModal.fromTemplateUrl('main/templates/child.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.modal = modal;
        });
        vm.closeModal = function() {
            vm.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            vm.modal.remove();
        });


    });
