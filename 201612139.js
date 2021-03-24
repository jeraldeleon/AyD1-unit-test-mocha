module.exports = {

    //Manipular cadenas
    numeroCaracteres: function(cadena){
        return (cadena.length);
    },    
    remplazar: function(cadena, subCadenaBuscar, subCadenaRemplazo){
      return cadena.replace(subCadenaBuscar,subCadenaRemplazo);
    },
    minusculas: function(cadena){
        return cadena.toLowerCase();
    },
    multiplicar: function(cadena,numero){
        return cadena.repeat(numero);
    },
    accederCaracter: function(cadena,numero){
        return cadena[numero];
    }
  }