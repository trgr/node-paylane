var PaylaneClient = require( '../paylane.js' )

var username = process.argv[2]
var password = process.argv[3]
var token    = process.argv[4]

var client = new PaylaneClient( username , password )

client.cardSaleByToken( {
	sale : {
		amount : 10,
		currency : "EUR",
		description : "My product!",		
	},
	customer : {
		name : "Foo Bar",
		email : "foo@bar.com",
		ip : "1.2.3.4",
		address : {
			street_house : "Test street 112",
			city : "Oslo",
			zip : "0233",
			country_code : "NO"
		}
	},
	card : {
		token : token
	}
} ,function( err , response){		
	console.log( err )
	console.log( response )
});
