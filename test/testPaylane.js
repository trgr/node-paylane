var should = require( 'should' )
var assert = require( 'assert' )

var paylane = require( '../paylane' )
console.log( paylane )
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



