/**
 * Created by dx.yang on 15/3/15.
 */


angular.module('macchiato', [
    'chieffancypants.loadingBar',
    'ngAnimate'
]).config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});