/**
 * Created by dx.yang on 15/3/31.
 */

angular.module('macchiato')
    .directive('maccNavbar', function() {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
            },
            templateUrl: 'components/navbar/navbar.html'
        }
    });
