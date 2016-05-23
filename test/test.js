"use strict";

var ip2countrify = require('..'),
    expect = require('chai').expect;


describe('API requests', function() {

    /*
        IPv6 Test
    */

    it('IPv6 test', function() {
        ip2countrify.lookup(
            '2001:420:1101:1::a',
            function(ip, results, error) {
                expect(results.countryCode).to.equal('US');
                expect(results.countryCode3).to.equal('USA');
                expect(results.countryName).to.equal('United States');
            }
        );
    } );


    /*
        IPv4 Test
    */

    it('IPv4 test', function() {
        ip2countrify.lookup(
            '5.6.7.8',
            function(ip, results, error) {
                expect(results.countryCode).to.equal('DE');
                expect(results.countryCode3).to.equal('DEU');
                expect(results.countryName).to.equal('Germany');
            }
        );
    });
} );
