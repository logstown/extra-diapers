'use strict';
angular.module('main')
    .controller('ChildCtrl', function($firebaseArray) {

        var vm = this;

        vm.child = {
            name: 'Henry',
            gender: 'unspecified',
            inDiapers: false,
            diapers: {
                size: null,
                brands: []
            }
        };


        vm.checkBoxes = function() {
            var bday = moment(vm.child.birthDate);
            var now = moment(new Date());
            var months = now.diff(bday, 'months')

            vm.child.inDiapers = months < 30 && months > 0;
        }

        var ref = firebase.database().ref().child("diapers").child('sizes');

        vm.diaperSizes = $firebaseArray(ref);

        vm.diaperSizes.$loaded(function() {
            vm.child.diapers.size = vm.diaperSizes[1].$id;
        })
    });
