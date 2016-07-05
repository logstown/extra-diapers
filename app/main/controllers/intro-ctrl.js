'use strict';
angular.module('main')
    .controller('IntroCtrl', function($scope) {

        $scope.child = {
            name: '',
            gender: 'unspecified',
            dob: null,
            diapers: {}
        };
    });
