var util = require( 'util' )
var request = require( 'request' )

var PAYLANE_URL = "https://%s:%s@direct.paylane.com/rest/%s"

var PaylaneClient = function( username , password){
	this.username = username
	this.password = password

}

PaylaneClient.prototype.send = function( options , callback ){
	request( options, function( err , response, body ){
		callback( err , body )
	})	
}

PaylaneClient.prototype.cardSaleByToken = function( paylaneParameters , callback ){
	var route = "cards/saleByToken"
	var options = {
		url : util.format(PAYLANE_URL,
											this.username ,
											this.password ,
											route),
		method : 'post',
		json : true,
		body : paylaneParameters			
	}
	this.send( options , callback )
}

module.exports = PaylaneClient
