/**
 * Created by dx.yang on 15/3/7.
 */

define([
    'angular',
    'ui.router',
    'ui.bootstrap',
    'angular-sanitize'
], function(angular){
    return angular.module('macchiato', [
        'ui.router',
        'ui.bootstrap',
        'ngSanitize'
    ]);
});
