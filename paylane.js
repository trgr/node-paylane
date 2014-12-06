"use strict"

var util = require( 'util' )

var request = require( 'request' )
var helpers = require( './helpers' )

var resources = []

resources["cards"] =[
		"saleByToken",
		"authorizationByToken",
		"authorization",
		"generateToken",
		"check",
		"checkByToken"
]
resources["paypal"] = [
	"sale",
	"authorization",
	"stopRecurring"
]
resources["directdebits"] = [
	"sale"
]

resources["sofort"] = [
	"sale"
]
resources["refunds"] = ""

var resourceEndpoints = Object.keys( resources )
var routes = []
resourceEndpoints.forEach( function( endpoint ){	
	if( typeof( endpoint) != "object" ){
		routes[endpoint] = helpers.createRoute( [ endpoint ] )
	}else{
		if( typeof( routes[endpoint] ) == undefined )
			routes[endpoint] = new Array()
		
		routes[endpoint] = resources[endpoint].map( function( current , index ){
			
			if( typeof( current ) == "function" )
				return current
			
		if( typeof( current) == "object" )
			return helpers.createRoute( [ endpoint , current] )
		})
	}
})


/*var routes = resources.map( function( current , index , array ){
	return current
	if( typeof( current ) == "function" )
		return current
	
		if( typeof( current) == "object" ){
		
		current.map( function( childCurrent , childIndex , childArray ){
			
			return crateRoute( [current , childCurrent ] )
		})
	}
})*/
console.log( routes )

routes.setCredentials = function( user , pass){
	username = user
	password = pass
}

module.exports = routes
