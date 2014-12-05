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

routes['cards'] = [
	"saleByToken",
	"authorizationByToken",
	"authorization",
	"generateToken",
	"check",
	"checkByToken"
]

var export_obj  = {}

export_obj.cards = routes['cards'].reduce(function(o, x, i) {
	o[x] = function( paylaneParameters , callback ){
		
		var route = util.format("cards/%s" , x )
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
	};
	return o;
}, {});

export_obj.setCredentials = function( user , pass ){
	username = user
	password = pass
}

module.exports = export_obj
