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

                scope.thing = '0';

                scope.diapers.$loaded(function() {
                    scope.child.diapers.size = scope.diapers.sizes[1]
                })

                scope.getSize = function(size) {
                    console.log(typeof(size))
                    switch (size) {
                        case '-1':
                            return 'Preemie';
                        case '0':
                            return 'Newborn'
                        default:
                            return size;
                    }
                }
            }
        };
    });
