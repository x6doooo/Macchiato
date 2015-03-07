/**
 * Created by dx.yang on 15/3/7.
 */

/**
 * 启动入口
 * @Created by meng.limeng on 2014/01/02.
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
], function(angular){'use strict';

    angular.element(document).ready(function(){
        angular.bootstrap(document, ['macchiato']);
    });

});

