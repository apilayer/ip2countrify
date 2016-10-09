"use strict";


var ip2countrify = require( '..' );


/*
    IPv4 lookup
*/

ip2countrify.lookup(
    '5.6.7.8',
    function( ip, results, error ) {

        if ( error ) {
            return console.warn( 'An error has occurred: ' + error );
        }

        console.log(
            'API results for ' + ip
        );
        console.log(
            'countryCode: ' + results.countryCode,
            'countryCode3: ' + results.countryCode3,
            'countryName: ' + results.countryName,
            'countryEmoji: ' + results.countryEmoji
        );

    }
);
