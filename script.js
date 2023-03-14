const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const previo = document.querySelector(".previo");
let copiarbtn = document.querySelector(".copiar"); 
const estilo = mensaje.style.backgroundImage;
const display = previo.style.display
//'la letra "e" es convertida para "enter"'
//'la letra "i" es convertida para "imes"'
//'la letra "a" es convertida para "ar"'
//'la letra "o" es convertida para "ober"'
//'la letra "u" es convertida para "ufat"'
function btnEncriptar() {
   const textoEncriptado = encriptar(textArea.value);
   mensaje.value = textoEncriptado
   textArea.value = "";
   mensaje.style.backgroundImage = "none"
   previo.style.display = "none"
   copiarbtn.classList.replace('copiar', 'copiar-muestra');

}

function encriptar(stringEncriptada) {
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ar"], ["o", "ober"], ["u", "ufat"]];
   stringEncriptada = stringEncriptada.toLowerCase()

   for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringEncriptada.includes(matrizCodigo[i][0])) {
         stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }

   }
   return stringEncriptada
}

function btnDesencriptar() {
   const textoEncriptado = desencriptar(textArea.value);
   textArea.value = textoEncriptado;

}

function desencriptar(stringDesencriptada) {
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ar"], ["o", "ober"], ["u", "ufat"]];
   stringDesencriptada = stringDesencriptada.toLowerCase()

   for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][1])) {
         stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }

   }
   return stringDesencriptada
}


function copiar() {
   let textoEncriptado = mensaje.value;
   mensaje.value = "";
   mensaje.style.backgroundImage = estilo;
   textArea.value = textoEncriptado;
   previo.style.display = display;
   copiarbtn.classList.replace('copiar-muestra','copiar');

}
