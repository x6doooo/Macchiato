/**
 * Created by dx.yang on 15/4/4.
 */


angular.module('macchiato')
    .directive('maccSiderNav', function() {
        return {
            restrict: 'E',
            scope: {
                list: '=list'
            },
            templateUrl: 'components/siderNav/siderNav.html',
            controller: 'macchiato.SiderNavCtrl'
        }
    });
