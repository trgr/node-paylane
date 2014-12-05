var util = require( 'util' )

var request = require( 'request' )
var helpers = require( './helpers' )

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



routes = helpers.transformResourceListToRoute( resources )

routes.setCredentials = function( user , pass){
	username = user
	password = pass
}

module.exports = routes
