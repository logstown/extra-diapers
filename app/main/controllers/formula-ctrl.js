'use strict';
angular.module('main')
    .controller('FormulaCtrl', function($scope, $firebaseObject) {

        console.log($scope)

        $scope.child = {
            gender: 'unspecified',
            inDiapers: false,
            isTakingFormula: false,
            diapers: {
                size: null,
                brands: []
            },
            formula: {
                stage: null,
                brands: [],
                types: []
            }
        };

        var ref = firebase.database().ref().child("formula");
        $scope.formula = $firebaseObject(ref);

        $scope.formula.$loaded(function() {
            $scope.child.formula.stage = $scope.formula.stages[0]
        })
    });
