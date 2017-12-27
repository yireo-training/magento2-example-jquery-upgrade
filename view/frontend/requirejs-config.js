var config = {
    'paths': {
        'jquery': 'Yireo_JqueryUpgrade/js/jquery-3.2.1.min',
        'jquery/ui': './jquery/jquery-ui',
        'jquery-ui': './jquery/jquery-ui',
        'jquery/jquery-ui': './jquery/jquery-ui',
        'jquery/jquery-migrate': 'Yireo_JqueryUpgrade/js/jquery-migrate-3.0.1',
        'jquery/jquery.mobile.custom': 'Yireo_JqueryUpgrade/js/jquery.mobile-1.5.0-alpha.1.min',
        'jquery/jquery.cookie':'./jquery/jquery.cookie',
        'jquery/jquery.validate':'./jquery.validate',
        'jquery/jquery-storageapi':'./jquery/jquery.storageapi.min',
        'jquery/jquery.metadata':'./jquery/jquery.metadata',
        'jquery/jquery-ui-timepicker-addon': 'Yireo_JqueryUpgrade/js/jquery-ui-timepicker-addon'
    },
    'map': {
        '*': {
        }
    },
    "shim": {
        'jquery/jquery.mobile.custom': [
            'jquery', 'jquery/jquery-migrate'
        ]
    }
};
