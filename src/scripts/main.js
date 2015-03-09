/**
 * Created by dx.yang on 15/3/8.
 */

;(function(){
    var vendorPath	= '../../vendor';

    var config = {
        baseUrl: 'scripts/',
        paths: {
            'angular':          vendorPath + '/angular/angular',
            'angular-animate':  vendorPath + '/angular-animate/angular-animate',
            'angular-cookies':  vendorPath + '/angular-cookies/angular-cookies',
            'angular-sanitize': vendorPath + '/angular-sanitize/angular-sanitize',
            'ui.router':        vendorPath + '/angular-ui-router/release/angular-ui-router',
            'ui.bootstrap':     vendorPath + '/angular-bootstrap/ui-bootstrap',
            'jQuery':           vendorPath + '/jquery/dist/jquery',
            'lodash':           vendorPath + '/lodash/dist/lodash',
            'app':              'app',
            'bootstrap':        'bootstrap'
        },
        shim: {
            'jQuery': {
                exports: 'jQuery'
            },
            'angular': {
                exports: 'angular',
                deps: [ 'jQuery' ]
            },
            'angular-animate': {
                deps: ['angular']
            },
            'angular-cookies': {
                deps: ['angular']
            },
            'angular-sanitize': {
                deps: ['angular']
            },
            'ui.router': {
                deps: ['angular']
            },
            'ui.bootstrap': {
                deps: ['angular']
            }
        }
    };


    if (typeof module !== 'undefined' && module.exports) {
        module.exports = config;
    } else {
        require.config(config);
    }
}());

