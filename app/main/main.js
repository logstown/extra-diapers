'use strict';
angular.module('main', [
        'ionic',
        'ngCordova',
        'ui.router',
        'firebase',
        'ionic.wizard'
        // TODO: load other modules selected during generation
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router
        $urlRouterProvider.otherwise('/main/list');
        $stateProvider
        // this state is placed in the <ion-nav-view> in the index.html
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'main/templates/menu.html',
                controller: 'MenuCtrl as menu'
            })
            .state('main.login', {
                url: '/login',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/login.html',
                        controller: 'LoginCtrl as vm',
                    }
                },
                resolve: {
                    // controller will not be loaded until $waitForAuth resolves
                    // Auth refers to our $firebaseAuth wrapper in the example above
                    currentAuth: ['Auth', function(Auth) {
                        // $waitForAuth returns a promise so the resolve waits for it to complete
                        return Auth.$waitForSignIn();
                    }]
                }
            })
            .state('main.intro', {
                url: '/intro',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/intro.html',
                        controller: 'IntroCtrl'
                    }
                }
            })
            .state('main.list', {
                url: '/list',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.listDetail', {
                url: '/list/detail',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list-detail.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.debug', {
                url: '/debug',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/debug.html',
                        controller: 'DebugCtrl as ctrl'
                    }
                }
            })
            .state('main.children', {
                url: '/children',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/children.html',
                        controller: 'ChildrenCtrl as vm'
                    }
                }
            })
            .state('main.child', {
                url: '/children/child',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/child.html',
                        controller: 'ChildCtrl as vm'
                    }
                }
            })
            .state('main.diapers', {
                url: '/children/child/diapers',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/diapers.html',
                        controller: 'DiapersCtrl'
                    }
                }
            })
            .state('main.formula', {
                url: '/children/child/formula',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/formula.html',
                        controller: 'FormulaCtrl'
                    }
                }
            })
            .state('main.clothes', {
                url: '/children/child/clothes',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/clothes.html',
                        controller: 'ClothesCtrl'
                    }
                }
            })
    });
