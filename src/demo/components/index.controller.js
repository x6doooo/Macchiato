/**
 * Created by dx.yang on 15/4/5.
 */
angular.module('macchiatoDemo')
    .controller('DemoComponentsCtrl', [
        '$scope',
        '$routeParams',
        function(
            $scope,
            $routeParams
        ) {
            $scope.siderNavList = [{
                key: 'table',
                title: 'table',
                icon: 'fa fa-table',
                url: '/#/components/table'
            }, {
                key: 'form',
                title: 'form',
                icon: 'fa fa-file',
                url: '/#/components/form'
            }, {
                key: 'dialog',
                title: 'dialog',
                icon: 'fa fa-comment',
                url: '/#/components/dialog'
            }];

            function getTemplate(which) {
                return 'demo/components/' + which + '.html'
            }

            function changeRoute() {
                $scope.view = getTemplate($routeParams.which);
            }

            $scope.$on('$routeChangeStart', function(e, r) {
                changeRoute();
            });
            changeRoute();

        }
    ]);
