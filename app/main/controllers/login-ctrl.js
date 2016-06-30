'use strict';
angular.module('main')
    .controller('LoginCtrl', function($firebaseObject, $state, Auth, currentAuth, $rootScope) {

        var vm = this;

        vm.login = login;

        activate();

        function activate() {
            if (currentAuth !== null) {
                $state.go('main.children');
            }

            Auth.$onAuthStateChanged(function(result) {
                console.log(result)
                if (result) {
                    $state.go('main.debug')
                }
            })
        }

        function login(provider) {
            Auth.$signInAnonymously()
                .then(function(result) {
                    $state.go('main.children')
                    console.log(result)
                        // var ref = firebase.database().ref();
                        //    var user = $firebaseObject(ref.child('users').child(result.user.uid));

                    // user.$loaded()
                    //     .then(function() {
                    //         var route = {
                    //             state: 'home',
                    //             params: {}
                    //         };

                    //         if ($rootScope.intendedRoute) {
                    //             route = $rootScope.intendedRoute
                    //             $rootScope.intendedRoute = undefined;
                    //         }

                    //         if (user.$value === null) {
                    //             user.$value = getProfile(result);
                    //             user.$save();
                    //         }

                    //         $state.go(route.state, route.params);
                    //     });
                })
                .catch(function(error) {
                    if (error.code === 'TRANSPORT_UNAVAILABLE') {
                        $state.go('main.children')
                    }
                })
        }

        function getProfile(result) {
            var profile = result[result.provider].cachedUserProfile;

            switch (result.provider) {
                case 'facebook':
                    return {
                        firstName: profile.first_name,
                        lastName: profile.last_name,
                        fullName: profile.name,
                        link: profile.link,
                        uid: result.auth.uid,
                        locale: profile.locale,
                        gender: profile.gender,
                        picture: profile.picture.data.url
                    };

                case 'google':
                    return {
                        firstName: profile.given_name,
                        lastName: profile.family_name,
                        fullName: profile.name,
                        link: profile.link,
                        uid: result.auth.uid,
                        locale: profile.locale,
                        gender: profile.gender,
                        picture: profile.picture
                    };

                case 'twitter':
                    return {
                        screenName: profile.screen_name,
                        fullName: profile.name,
                        link: profile.url,
                        uid: result.auth.uid,
                        locale: profile.lang,
                        picture: profile.profile_image_url
                    }

                case 'github':
                    return {
                        screenName: profile.login,
                        fullName: profile.name,
                        link: profile.url,
                        uid: result.auth.uid,
                        picture: profile.avatar_url
                    }
            }
        }

    });
