const fs = require('fs');
const colors = require('colors');



const crearArchivo = async( base = 5 , listar = true , hasta = 10) => {

    try{
        
        
        let salida , consola ='';

        for (let i = 1; i <= hasta; i++) {
            
            salida += `${ base } x ${ i } = ${ base * i }\n`; //con salto de linea
            consola += `${ base } x ${ i } = ${ base * i }\n`.america;
        };  
        
        if (listar == true){
            
            console.log('================'.rainbow);
            console.log('Tabla del:'.trap, colors.blue(base));
            console.log('================'.rainbow);
            console.log(consola)
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        return `tabla-${base}.txt`;
    }
    catch (err){
        throw err
    }
        

};

module.exports = {
    crearArchivo,
};