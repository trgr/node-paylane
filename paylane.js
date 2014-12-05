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

cards.saleByToken =  function( paylaneParameters , callback ){
	var route = "cards/saleByToken"
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


cards.authorizationByToken =  function( paylaneParameters , callback ){
	var route = "cards/authorizationByToken"
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

cards.authorization =  function( paylaneParameters , callback ){
	var route = "cards/authorization"
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

cards.generateToken =  function( paylaneParameters , callback ){
	var route = "cards/generateToken"
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

cards.check =  function( paylaneParameters , callback ){
	var route = "cards/check"
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


cards.checkByToken =  function( paylaneParameters , callback ){
	var route = "cards/checkByToken"
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


module.exports = {
	setCredentials : setCredentials,
	cards : cards
}
