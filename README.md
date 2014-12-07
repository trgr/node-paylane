About
=====
A node.js implementation of the PayLane REST API.
Implements all of http://devzone.paylane.com/function-reference/

Installation
============
```npm install node-paylane```

Usage
=====
Usage is very simple, set your username and password with setCredentials , then call ```module.resource.method```
For example:

```
var paylane = require( 'node-paylane' )
paylane.setCredentials( 'username' , 'password' )
paylane.sofort.sale( parameters , function( err , return ){
 console.log( return )
})

```
