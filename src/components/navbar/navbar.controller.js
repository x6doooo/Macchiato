angular.module('macchiato')
    .controller('macchiato.NavbarCtrl', [
        '$scope',
        '$location',
        'macchiato.mainNavList',
        function (
            $scope,
            $location,
            mainNavList
        ) {
            $scope.list = mainNavList;
            function changeTab() {
                var p = $location.path();
                if (!p) {
                    return;
                }
                p = p.match(/^\/([^/]+)/)[1];
                $scope.currentTab = p;
            }

            //$scope.version = '1.0';
            $scope.$on('$routeChangeStart', function () {
                changeTab();
            });
            changeTab();
        }]);
