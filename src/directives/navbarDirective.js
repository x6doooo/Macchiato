/**
 * Created by dx.yang on 15/3/31.
 */

angular.module('macchiato')
    .directive('maccNavbar', function() {
        return {
            restrict: 'E',
            scope: {
                list: '='
            },
            templateUrl: 'components/navbar/navbar.html'
        }
    });
