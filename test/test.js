"use strict";

var ip2countrify = require( '..' ),
    expect = require( 'chai' ).expect;


describe( 'API requests', function() {

    /*
        IPv6 Test
    */

    it( 'IPv6 test', function( done ) {
        ip2countrify.lookup(
            '2001:420:1101:1::a',
            function( ip, results ) {
                expect( results.countryCode ).to.equal( 'US' );
                expect( results.countryCode3 ).to.equal( 'USA' );
                expect( results.countryName ).to.equal( 'United States' );
                expect( results.countryEmoji ).to.equal( '🇺🇸' );

                done();
            }
        );
    } );


    /*
        IPv4 Test
    */

    it('IPv4 test', function( done ) {
        ip2countrify.lookup(
            '5.6.7.8',
            function( ip, results ) {
                expect( results.countryCode ).to.equal( 'DE' );
                expect( results.countryCode3 ).to.equal( 'DEU' );
                expect( results.countryName ).to.equal( 'Germany' );
                expect( results.countryEmoji ).to.equal( '🇩🇪' );

                done();
            }
        );
    });

} );
