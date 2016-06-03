ip2countrify
============

`ip2countrify` is a memory-friendly and dependencies-free Node.js module for retrieving country information via https://ip2country.info JSON API. With support for IPv4 and IPv6 addresses.


[![Dependency Status](https://david-dm.org/sergejmueller/ip2countrify.svg)](https://david-dm.org/sergejmueller/ip2countrify)
[![Code Climate](https://codeclimate.com/github/sergejmueller/ip2countrify/badges/gpa.svg)](https://codeclimate.com/github/sergejmueller/ip2countrify)
[![Build Status](https://travis-ci.org/sergejmueller/ip2countrify.svg?branch=master)](https://travis-ci.org/sergejmueller/ip2countrify)


Install
-----

```
npm install ip2countrify
```


Usage
-----

```javascript
var ip2countrify = require('ip2countrify');

ip2countrify.lookup(
    '5.6.7.8',
    function(ip, results, error) {
        if ( error ) {
            return console.warn('An error has occurred: ' + error);
        }

        console.log(
            'API results for ' + ip
        );
        console.log(
            'countryCode: ' + results.countryCode,
            'countryCode3: ' + results.countryCode3,
            'countryName: ' + results.countryName
        );
    }
);
```


Limitations
-----
Free, but only for open source projects. Be fair!


Requirements
-----
* Internet connection


Notice
-----
This product includes GeoLite data created by MaxMind, available from http://maxmind.com