/**
 * Created by dx.yang on 15/3/15.
 */

angular.module('demo')
    .controller('indexCtrl', [
        '$scope',
        'macchiato.ipService',
        'macchiato.ajaxService',
        function(
            $scope,
            macchiatoIpService,
            macchiatoAjaxService
        ) {
            $scope.ip = macchiatoIpService.IP2Num('127.0.0.1')
            macchiatoAjaxService.get('/api/test').done(function() {
                console.log(arugments);
            })
        }
    ]);
