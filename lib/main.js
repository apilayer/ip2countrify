"use strict";


var https = require('https'),
    net = require('net');


module.exports = {

    lookup: function(ip, callback) {
        if ( ! ip ) {
            return callback(
                ip,
                null,
                'Empty IP'
            );
        }

        if ( net.isIP(ip) === 0 ) {
            return callback(
                ip,
                null,
                'Invalid IP'
            );
        }

        var options = {
            method: 'HEAD',
            host: 'api.ip2country.info',
            path: '/ip?' + ip,
            headers: {
                'User-Agent': 'ip2countrify'
            }
        };

        var request = https.request( options, function(response) {
            if ( response.statusCode >= 400 ) {
                callback(
                    ip,
                    null,
                    'Response status code: ' + response.statusCode
                );

            } else {
                var key,
                    headers = response.headers,
                    cherries = {},
                    pairs = {
                        'x-country-code': 'countryCode',
                        'x-country-code3': 'countryCode3',
                        'x-country-name': 'countryName'
                    };

                for ( key in pairs ) {
                    if ( headers.hasOwnProperty(key) ) {
                        cherries[ pairs[key] ] = headers[key];
                    }
                }

                if ( Object.keys(cherries).length !== 3 ) {
                    callback(
                        ip,
                        null,
                        'Not all cherries are picked'
                    );
                } else {
                    callback(
                        ip,
                        cherries,
                        null
                    );
                }
            }

            response.on('data', function(d) {
                process.stdout.write(d);
            });
        }).on('error', function(e) {
            callback(
                ip,
                null,
                e.message
            );
        });

        request.end();
    }

};
