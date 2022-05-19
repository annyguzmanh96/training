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
      clave={}; //se define un objeto denominado 'clave' en donde irán como key los caracteres del msj original recibido por argumento y como value, serán los carcateres aleaterios de encriptación
      let mensajeEncriptado= mensaje.map(caracter=>{ //Creo el msj encriptado como array con el metodo.map
         let newCaracter=alfabetoIngles[Math.floor(Math.random() *(largoAlfabetoIngles))]; //el nuevo caracter que pisará el caracter del msj original se toma de la variable antes definida como 'alfabetoIngles' (un array) y se aplica el método Math.random() para tomarlo de forma aleatoria
         clave[caracter]=newCaracter; //se crea el objeto 'clave' co key=caracter (del msj original) y value=newCaracter(tomado aleatoriamente del alfabetoIngles)
         return(newCaracter); //Retorna por cada iteración un elemento del nuevo array que se crea con el método .map, con el nuevo caracter que va reemplazando el caracter del msj original
      })
      mensajeEncriptado=mensajeEncriptado.join(''); //Se pasa el mensajeEncriptado de array a strings
      return[mensajeEncriptado, clave]; //se retorna el msj encriptado y el objeto 'clave' con la info usada para encriptar
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

function decodificador(mensajeEncriptado1, claveEncriptado1){ //decodificador, recibe como argumento un msj encriptado y la clave con los valores usados para encriptar
   console.log(mensajeEncriptado1); //Verficación por consola
   let claveEncriptado1Inv= invert(claveEncriptado1);//Se invierte la clave para tener ahora como value, los caracteres del mensaje original
   mensajeDecodificado=[]; //para guardar en un array los value de las key de la 'claveEncriptado1Inv' que son en realidad los caracteres de msj orginal
   for(key in claveEncriptado1Inv){ //Recorriendo el obj 'claveEncriptado1Inv'
      mensajeDecodificado.push(claveEncriptado1Inv[key]); //guardando en un arreglo los value con los carateres del msj original
   }
   mensajeDecodificado=mensajeDecodificado.join(''); //Se convierte el mensajeDecodificado en strings
   return(mensajeDecodificado); //se visualiza el mensaje ya Decodificado
}	