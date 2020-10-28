const fs = require('fs');
let crearArchivo = (base, limite) =>{
    return new Promise((resolve, reject) => {
    let tabla = '';

    if(!Number(base)){
        reject('Inserta un numero valido');
        return;
    }
    if(!Number(limite)){
      reject('Inserta un limite valido');
      return;
    }

      for(let i=1; i<=limite; i++){
        /* console.log(base + 'X' + i + '=' + base * i );// 1ra version*/
        tabla += `${base} X ${i} = ${base * i}\n`;
         //console.log(`${base} X ${i} = ${base * i}`);//nueva version
      }

      fs.writeFile(`tablas/tabla-${base}.txt`,tabla, (err) =>{
        if (err){
            reject (err);
        }else{
        resolve(`tabla-${base}.txt`)
    }
      });
    });

};
///////////////////////////////////////////
let listarTabla = (base, limite) =>{
  return new Promise((resolve, reject) => {
    
    if(!Number(base)){
      reject('Inserta un numero valido');
      return;
    }
    if(!Number(limite)){
      reject('Inserta un limite valido');
      return;
    }
    for(let i=1; i<=limite; i++){
      /* console.log(base + 'X' + i + '=' + base * i );// 1ra version*/
      console.log(`${base} X ${i} = ${base * i}`);
       //console.log(`${base} X ${i} = ${base * i}`);//nueva version
    }

  });

};
module.exports ={
    crearArchivo: crearArchivo,
    listarTabla
};