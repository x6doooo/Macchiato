/**
 * Created by dx.yang on 15/4/5.
 */

angular.module('macchiato')
    .controller('macchiato.SiderNavCtrl', [
        '$scope',
        '$location',
        function(
            $scope,
            $location
        ) {

            function changeTab() {
                var p = $location.path();
                if (!p) {
                    return;
                }
                p = p.match(/^\/([^/]+)\/([^/]+)/);
                //console.log(p)
                $scope.currentTab = p[2];
            }

            $scope.$on('$routeChangeStart', function () {
                changeTab();
            });
            changeTab();
        }
    ]);
