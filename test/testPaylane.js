var should = require( 'should' )
var assert = require( 'assert' )

var paylane = require( '../paylane' )

describe( 'cards' , function() {
	it( 'Should have function setCredentials' , function( done ){
		paylane.should.have.property('setCredentials')
		done()
	})

	it( 'Should have property cards',  function( done ){
		paylane.should.have.property( 'cards' )
		done()
	})
	it( 'Should have function cards.saleByToken' , function( done ){
		paylane.cards.should.have.property( 'saleByToken' )
		done()
	})
	it( 'Should have function authorizationByToken ' , function( done ){
		paylane.cards.should.have.property( 'authorizationByToken' )
		done()
	})

	it( 'Should have function authorization ' , function( done ){
		paylane.cards.should.have.property( 'authorization' )
		done()
	})	

	it( 'Should have function generateToken ' , function( done ){
		paylane.cards.should.have.property( 'generateToken' )
		done()
	})

	it( 'Should have function check ' , function( done ){
		paylane.cards.should.have.property( 'check' )
		done()
	})


	it( 'Should have function checkByToken ' , function( done ){
		paylane.cards.should.have.property( 'checkByToken' )
		done()
	})
})

describe( 'paypal' , function() {
	it( 'Should have function sale ' , function( done ){
		paylane.paypal.should.have.property( 'sale' )
		done()
	})

	it( 'Should have function authorization ' , function( done ){
		paylane.paypal.should.have.property( 'authorization' )
		done()
	})
	it( 'Should have function stopRecurring ' , function( done ){
		paylane.paypal.should.have.property( 'stopRecurring' )
		done()
	})
})



describe( 'directdebits' , function() {
	it( 'Should have function sale ' , function( done ){
		paylane.directdebits.should.have.property( 'sale' )
		done()
	})

})

describe( 'sofort' , function() {
	it( 'Should have function sale ' , function( done ){
		paylane.sofort.should.have.property( 'sale' )
		done()
	})

})


describe( 'refunds' , function() {
	it( 'Should terminate on resource ' , function( done ){
		paylane.should.have.property( 'refunds' )
		done()
	})
})

describe( 'authorizations' , function() {
	it( 'Should have function capture ' , function( done ){
		paylane.authorizations.should.have.property( 'capture' )
		done()
	})

	it( 'Should have function close ' , function( done ){
		paylane.authorizations.should.have.property( 'close' )
		done()
	})
})



describe( 'resales' , function() {
	it( 'Should have function sale ' , function( done ){
		paylane.resales.should.have.property( 'sale' )
		done()
	})

	it( 'Should have function authorization ' , function( done ){
		paylane.resales.should.have.property( 'authorization' )
		done()
	})
})


describe( 'threedsecure' , function() {
	it( 'Should have function checkCard ' , function( done ){
		paylane.threedsecure.should.have.property( 'checkCard' )
		done()
	})

	it( 'Should have function checkCardByToken ' , function( done ){
		paylane.threedsecure.should.have.property( 'checkCardByToken' )
		done()
	})

	it( 'Should have function authSale ' , function( done ){
		paylane.threedsecure.should.have.property( 'authSale' )
		done()
	})

})


