'use strict';
angular.module('main')
    .directive('diapersPrefs', function($firebaseObject) {
        return {
            templateUrl: 'main/templates/diapers-prefs.html',
            restrict: 'E',
            scope: {
                child: '='
            },
            link: function postLink(scope) {
                var ref = firebase.database().ref().child("diapers");
                scope.diapers = $firebaseObject(ref);

                scope.diapers.$loaded(function() {
                    scope.child.diapers.size = scope.diapers.sizes[1]
                })
            }
        };
    });
