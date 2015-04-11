/**
 * Created by dx.yang on 15/4/5.
 */

angular.module('macchiato')
    .controller('macchiato.SiderNavCtrl', [
        '$scope',
        '$location',
        '$routeParams',
        function(
            $scope,
            $location,
            $routeParams
        ) {
            function changeTab() {
                $scope.currentTab = $routeParams.which;
            }
            $scope.$on('$routeChangeStart', function () {
                changeTab();
            });
            changeTab();
        }
    ]);
