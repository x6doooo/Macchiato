/**
 * Created by dx.yang on 15/3/8.
 */

define([
    'angular',
    'app'//,
    //'initConfig',
    //'cons/cdnCons',
    //'states/_base',
    //'directives/_base',
    //'controllers/_base',
    //'filters/_base',
    //'services/_base'
], function(angular){
    angular.element(document).ready(function(){
        angular.bootstrap(document, ['macchiato']);
    });
});
