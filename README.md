About
=====
A node.js implementation of the PayLane REST API.
Implements all of http://devzone.paylane.com/function-reference/

Disclaimer
==========
This package is not official, I am not affiliated with PayLane. Us this package at your own risk.

Installation
============
```npm install paylane```

Usage
=====
Usage is very simple, set your username and password with setCredentials , then call ```module.resource.method```
For example:

```
var paylane = require( 'paylane' )
paylane.setCredentials( 'username' , 'password' )
paylane.sofort.sale( parameters , function( err , return ){
 console.log( return )
})

```
