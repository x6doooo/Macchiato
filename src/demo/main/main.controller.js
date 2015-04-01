angular.module('macchiatoDemo')
    .controller('MainCtrl', function ($scope) {
        $scope.navList = [{
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
            key: 'secondNav',
            title: 'sec',
            icon: 'fa fa-subway',
            url: '/#/ttt'
        }];
    });
