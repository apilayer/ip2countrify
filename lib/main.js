"use strict";


var https = require( 'https' ),
    net = require( 'net' );


module.exports = {

    lookup: function( ip, callback ) {
        if ( ! ip ) {
            return callback(
                ip,
                null,
                'Empty IP'
            );
        }

        if ( net.isIP( ip ) === 0 ) {
            return callback(
                ip,
                null,
                'Invalid IP'
            );
        }

        var options = {
            method: 'GET',
            host: 'api.ip2country.info',
            path: '/ip?' + ip,
            headers: {
                'User-Agent': 'ip2countrify'
            }
        };

        var request = https.request( options, function( response ) {

            var body = [];

            response.on( 'data', function( chunk ) {

                body.push( chunk );

            } ).on( 'end', function() {

                body = Buffer.concat( body ).toString();

                return callback(
                    ip,
                    JSON.parse( body ),
                    null
                );

            } ).on( 'error', function( error ) {

                return callback(
                    ip,
                    null,
                    error.message
                );

            } );
        } );

        request.end();
    }

};
