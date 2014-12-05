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

function transformResourceListToRoute( rec ){
	var routes = []

	Object.keys(rec).forEach( function( key , i , a){
		if( typeof( rec[a[i]] ) != "object" ){
			routes[key] = createRoute( [ key ]  )
		}else{
			rec[a[i]].forEach( function(childKey , childIndex , childArray ){
				if( routes[key] == undefined )
					routes[key] = new Array()
				
				routes[key][childKey] = createRoute( [key , childKey] )
			})
		}
	})
	return routes
}

module.exports = {
	createRoute : createRoute,
	transformResourceListToRoute : transformResourceListToRoute
}
