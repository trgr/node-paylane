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
var routes = {
	cards : [
	"saleByToken",
	"authorizationByToken",
	"authorization",
	"generateToken",
	"check",
	"checkByToken"
	]
}
	


var routeExport = []
Object.keys(routes).forEach( function( key , i , a){
	routes[a[i]].forEach( function(childKey , childIndex , childArray ){
		if( routeExport[key] == undefined )
			routeExport[key] = new Array()

		
		routeExport[key][childKey] = function( paylaneParameters , callback ){
			var route = util.format("cards/%s" , childKey )
			var options = {
				url : util.format(PAYLANE_URL,
													username,
													password,
													route),
				method : 'post',
				json : true,
				body : paylaneParameters			
			}
			send( options , callback )
		}
	})
})


routeExport.setCredentials = function( user , pass ){
	username = user
	password = pass
}

module.exports = routeExport
