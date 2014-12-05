var should = require( 'should' )
var assert = require( 'assert' )

var paylane = require( '../paylane' )

describe( 'module' , function() {
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
})

					

