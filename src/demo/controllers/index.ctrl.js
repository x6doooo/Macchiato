/**
 * Created by dx.yang on 15/3/15.
 */

angular.module('demo')
    .controller('indexCtrl', [
        '$scope',
        'macchiato.ipService',
        function(
            $scope,
            macchiatoIpService
        ) {
            $scope.ip = macchiatoIpService.IP2Num('127.0.0.1')
        }
    ]);
