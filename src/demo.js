angular.module('macchiatoDemo', [
    'macchiato'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'demo/main/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
