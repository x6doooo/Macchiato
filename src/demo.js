angular.module('macchiatoDemo', [
        'macchiato'
    ])
    .constant('macchiato.mainNavList', [{
        key: 'home',
        title: 'Home',
        icon: 'fa fa-home',
        url: '/#/home'
    }, {
        key: 'chart',
        title: 'Chart',
        icon: 'fa fa-area-chart',
        url: '/#/index'
    }, {
        key: 'components',
        title: 'components',
        icon: 'fa fa-subway',
        url: '/#/components/table'
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'demo/home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/chart', {
                templateUrl: 'demo/chart/chart.html',
                controller: 'ChartCtrl'
            })
            .when('/components/:which', {
                templateUrl: 'demo/components/index.html',
                controller: 'DemoComponentsCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
