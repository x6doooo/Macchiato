/**
 * Created by dx.yang on 15/3/9.
 */
define([
    'angular'
], function(angular) {
    angular.module('macchiato')
        .service(function() {
            this.test = function(a) {
                console.lg(a);
            };
        });
});
