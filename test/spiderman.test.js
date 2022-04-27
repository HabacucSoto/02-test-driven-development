const Spiderman = require( '../app/spiderman' )

describe( 'Unit test for class Spiderman', () => {
    test( '1) Object creation', () => {
        
        const { name, age, filmStudio, films } = new Spiderman( 'Tobey Maguire', 46, 'Sony', 3 )

        expect( name ).toBe( 'Tobey Maguire' )
        expect( age ).toBe( 46 )
        expect( filmStudio ).toBe( 'Sony' )
        expect( films ).toBe( 3 )

    } )
    test( '2) Use the method getInfo()', () => {
        
        const tom = new Spiderman( 'Tom Holland', 25, 'Sony', 6 )

        expect( tom.getInfo() ).toBe( "Hey, I'm Tom Holland from Sony" )

    } );
} )