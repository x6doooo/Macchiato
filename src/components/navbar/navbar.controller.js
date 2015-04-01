angular.module('macchiato')
    .controller('NavbarCtrl', [
        '$scope',
        '$location',
        function (
            $scope,
            $location
        ) {
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
