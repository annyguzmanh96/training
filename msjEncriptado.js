/* RETO - FUNDAMENTOS DE PROGRAMACIÓN
Usted ha sido contratado por seguridad nacional para encriptar mensajes de
inteligencia militar bajo el cargo de experto en seguridad informática, es
necesario ocultar la información de estos mensajes ya que pasan por redes
poco seguras o pueden pasar por manos de muchas personas, reduciendo la
discreción de esta información, por eso, tanto el emisor como el receptor
deben tener los medios para encriptar y desencriptar mensajes. 

NOTA:
* Deberá crear una clave de encripción, esta consistirá en un objeto con
elementos que tendrán por clave los caracteres extraídos en el paso
anterior y por valor las letras del alfabeto del inglés en mayúscula.

OJO:
1. El alfabeto del inglés sólo posee 26 caracteres.
2. Dado que se usa el alfabeto para encriptar mensajes, un mensaje no
puede tener más de 26 caracteres diferentes.

*/

//CÓDIGO A PARTIR DE AQUÍ:

//FUNCIÓN ENCRIPTAR
const alfabetoIngles= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //Alfabeto ingles pasado a un array
const largoAlfabetoIngles=alfabetoIngles.length; //Largo del alfabeto inglés
function encriptar(mensaje){ //Recibe como parámetro el mensaje a encriptar
   if(mensaje.length<=26){ //Condición para verificar que el largo del mensaje sea menor o igual a 26 acorde a las instrucciones
      mensaje=mensaje.split('');//pasando de strings a array el msj, con el método split, para poder jugar mejor con los datos.
      let caracteresUnicos=mensaje.filter((caract,index)=> { //Para obtener los caracteres únicos del mensaje recibido, se aplica el método filter al array del msj y como condición de filtrado para devolver el nuevo array se usa el método indexof y se compara con el indice del caracter examinado para así eliminar elmentos duplicados del array
               return(mensaje.indexOf(caract)===index); //Uso del método indexOf
      })
      let clave={}; //se define un objeto denominado 'clave' en donde irán como key los caracteres del msj original recibido por argumento y como value, serán los carcateres aleaterios de encriptación
      let objetoClaveEncriptado= caracteresUnicos.map(caracter=>{ //Creo el msj encriptado como array con el metodo.map
         let newCaracter=alfabetoIngles[Math.floor(Math.random() *(largoAlfabetoIngles))]; //el nuevo caracter que pisará el caracter del msj original se toma de la variable antes definida como 'alfabetoIngles' (un array) y se aplica el método Math.random() para tomarlo de forma aleatoria
         clave[caracter]=newCaracter; //se crea el objeto 'clave' co key=caracter (del msj original) y value=newCaracter(tomado aleatoriamente del alfabetoIngles)
         return(newCaracter); //Retorna por cada iteración un elemento del nuevo array que se crea con el método .map, con los caracteres generados para a continuacion, enriptar el msj original
      })
      console.log(objetoClaveEncriptado); //Sólo por verficar

      let encriptado = [];
      for(let i=0; i<mensaje.length; i++) {
         if(clave.hasOwnProperty(mensaje[i])) {
            encriptado.push(clave[mensaje[i]]);
         }
      }
      encriptado=encriptado.join('');
      return [encriptado,clave];
   }else{
      return('El mensaje no puede tener más de 26 caracteres diferentes'); //Si el msj a encriptar tiene mas de 26 caracteres
   }
}

//FUNCIÓN DECODIFICADOR

//Antes hacemos una función para invertir la key-valor de un objeto.

function invert(clavee){ //función recibe un objeto como argumento
   newClave={}; //Creando objeto vacío
   for (key in clavee){ //Recorriendo el objeto ingresado como argumento
      newClave[clavee[key]]=key; //al nuevo objeto 'newClave' se le ingresan valores key-value, invirtiendo el objeto ingresado como argumento
   }
   return newClave; //Se retorna el nuevo objeto 'newClave'
}

function decodificador(encriptado, clave){ //decodificador, recibe como argumento un msj encriptado y la clave con los valores usados para encriptar
   console.log(encriptado); //Verficación por consola
   let claveInv= invert(clave);//Se invierte la clave para tener ahora como value, los caracteres del mensaje original
   let desencriptado=[]; //para guardar en un array los value de las key de la 'claveInv' que son en realidad los caracteres de msj orginal
      for(let i=0; i<encriptado.length; i++) {
         if(claveInv.hasOwnProperty(encriptado[i])) {
            desencriptado.push(claveInv[encriptado[i]]);
         }
      }
      desencriptado=desencriptado.join('');
   
   return desencriptado
}	