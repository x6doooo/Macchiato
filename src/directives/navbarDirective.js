/**
 * Created by dx.yang on 15/3/31.
 */

angular.module('macchiato')
    .directive('maccNavbar', function() {
        return {
            restrict: 'E',
            replace: true,
            //transclude: true,
            scope: {
            },
            templateUrl: 'components/navbar/navbar.html',
            controller: 'macchiato.NavbarCtrl'
        }
    });
