var config = {
    paths: {
        'jquery/patches/jquery': 'js/zero',

    },
    config: {
        mixins: {
            jquery: {
                'jquery/patches/jquery': false
            }
        }
    }
};

require(['jquery'], function($) {
    $.migrateMute = true;
});