const assert = require('chai').assert;
const app = require('../201612139');

// Results
describe('App', function(){

    describe('numeroCaracteres()', function(){
        it('numero caractes cadena, deberia de retornar tipo numero', function(){
            let resultado = app.numeroCaracteres("HOLA MUNDO");
            assert.typeOf(resultado, 'number');
        });
    });
  
    describe('remplazar()', function(){
        it('remplazar cadena, deberia de retornar la nueva cadena', function(){
            let resultado = app.remplazar("Hola Mundo","Mundo","MUNDO");
            assert.equal(resultado, 'Hola MUNDO');
        });
    });

    describe('minusculas()', function(){
        it('deberia de retornar una cadena en minusculas', function(){
            let resultado = app.minusculas("HOLA MUNDO");
            assert.equal(resultado, 'hola mundo');
        });
    });

    describe('multiplicacion()', function(){
        it('deberia de retornar una cadena multiplicar', function(){
            let resultado = app.multiplicar("Hola",3)
            assert.typeOf(resultado, 'string');
        });
    });

    describe('accederCaracter()', function(){
        it('deberia de retornar el caracter en un indice', function(){
            let resultado = app.accederCaracter("Hola",1)
            assert.equal(resultado, 'o');
        });
    });
});
