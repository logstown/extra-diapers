'use strict';
angular.module('main')
    .controller('ClothesCtrl', function($log, $scope, $firebaseObject) {

        $log.log('Hello from your Controller: ClothesCtrl in module main:. This is your controller:', this);

        $scope.child = {
            gender: 'unspecified',
            inDiapers: false,
            isTakingFormula: false,
            needsClothes: false,
            diapers: {
                size: null,
                brands: []
            },
            formula: {
                stage: null,
                brands: [],
                types: []
            },
            clothes: {
                sizeRange: null
            }
        };



        var ref = firebase.database().ref().child("clothes");
        $scope.clothes = $firebaseObject(ref);

        $scope.clothes.$loaded(function() {
            console.log($scope.clothes)
            $scope.types = _.chain($scope.clothes.sizes)
                .map('type')
                .uniq()
                .value();
            $scope.sizeType = 'baby'
        })

    });
