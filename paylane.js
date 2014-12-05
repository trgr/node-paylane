var util = require( 'util' )
var request = require( 'request' )

var PAYLANE_URL = "https://%s:%s@direct.paylane.com/rest/%s"

var username = null
var password = null

function setCredentials( user , pass){
	username = user
	password = pass
}

function createRoute( pathArray ){
	return function( paylaneParameters , callback ){
		var route = pathArray.join("/")
		var options = {
			url : util.format(PAYLANE_URL, username , password , route ),
			method : 'post',
			json : true,
			body : paylaneParameters			
		}
			send( options , callback )
	}
}

function send( options , callback ){
	request( options, function( err , response, body ){
		callback( err , body )
	})	
}


var resources = []
resources["cards"] = [
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
					
var routes = []

Object.keys(resources).forEach( function( key , i , a){
	if( typeof( resources[a[i]] ) != "object" ){
		routes[key] = createRoute( [ key ]  )
	}else{
	resources[a[i]].forEach( function(childKey , childIndex , childArray ){
		if( routes[key] == undefined )
			routes[key] = new Array()
		
		routes[key][childKey] = createRoute( [key , childKey] )
	})
	}
})


routes.setCredentials = setCredentials

module.exports = routes
