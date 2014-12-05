var util = require( 'util' )
var request = require( 'request' )

var PAYLANE_URL = "https://%s:%s@direct.paylane.com/rest/%s"

var username = null
var password = null

var setCredentials = function( user , pass){
	username = user
	password = pass
}

function send( options , callback ){
	request( options, function( err , response, body ){
		callback( err , body )
	})	
}

var cards  = {}
var paypal = {}
var sofort = {}
var sales  = {}

var resales  = {}
var threeDsecure = {}
var banktransfers  = {}
var directdebits   = {}
var authorizations = {}
var routes = []
var export_routes = []
var resources = {
	cards : [
	"saleByToken",
	"authorizationByToken",
	"authorization",
	"generateToken",
	"check",
	"checkByToken"
	]
}

var routes = []

Object.keys(resources).forEach( function( key , i , a){
	resources[a[i]].forEach( function(childKey , childIndex , childArray ){
		if( routes[key] == undefined )
			routes[key] = new Array()
		
		routes[key][childKey] = function( paylaneParameters , callback ){
			var route = util.format("%s/%s" , key ,childKey )
			var options = {
				url : util.format(PAYLANE_URL, username , password , route ),
				method : 'post',
				json : true,
				body : paylaneParameters			
			}
			send( options , callback )
		}
	})
})


routes.setCredentials = setCredentials

module.exports = routes
