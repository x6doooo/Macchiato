/**
 * Created by dx.yang on 15/4/5.
 */
angular.module('macchiatoDemo')
    .controller('DemoComponentsCtrl', [
        '$scope',
        function(
            $scope
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
            }];
        }
    ]);
