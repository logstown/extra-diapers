'use strict';
angular.module('main')
    .controller('DiapersCtrl', function($scope, $firebaseObject) {

        console.log($scope)

        $scope.child = {
            gender: 'unspecified',
            inDiapers: false,
            diapers: {
                size: null,
                brands: []
            }
        };


        var ref = firebase.database().ref().child("diapers");
        $scope.diapers = $firebaseObject(ref);

        $scope.diapers.$loaded(function() {
            $scope.child.diapers.size = $scope.diapers.sizes[1]
        })
    });
