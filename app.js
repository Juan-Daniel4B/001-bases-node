const argv = require('yargs')
.command('listar','Imprime en pantalla la tabla de multiplicar',{
    base:  {
        demand: true,
        alias: 'b' 
    },
    limite: {
        alias: '1',
        default: 10
    }
})
.command('crear','crea un archivo con la tabla de multiplicar',{
    base:  {
        demand: true,
        alias: 'b' 
    },
    limite: {
        alias: '1',
        default: 10
    }
})
.help()
.argv;
const multiplicar = require('./multiplicacion/multiplicacion');

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

switch(comando){
    case 'listar':
        
        multiplicar.listarTabla(base, limite)
            .then()
            .catch(error => console.log(`Ocurrio un error ${error}`));
        break;
    case 'crear':
        
        multiplicar
            .crearArchivo(base, limite)
            .then(archivo => console.log(`El archivo ${archivo}se genero con exito`))
            .catch(error => console.log(`Ocurrio un error ${error}`));
    break;
    default:
        console.log('Comando no reconocido');
}

//console.log('La base insertada fue:',argv.base);
//console.log('El limite insertado fue:',argv.limite);
//console.log('La opción del menú seleccionado fue: ',argv._[0]);

 