'use strict';
angular.module('main')
    .controller('DiapersCtrl', function($scope) {

        console.log($scope)

        $scope.child = {
            gender: 'unspecified',
            inDiapers: false,
            diapers: {
                size: null,
                brands: []
            }
        };
    });
