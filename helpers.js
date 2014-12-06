var PAYLANE_URL = "https://%s:%s@direct.paylane.com/rest/%s"

var username = null
var password = null

function send( options , callback ){
	request( options, function( err , response, body ){
		callback( err , body )
	})	
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



module.exports = {
	createRoute : createRoute
}
