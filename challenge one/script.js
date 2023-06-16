const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btn-copiar");
const img = document.querySelector(".muñeco");

// La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"




function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.classList.add("ajustar");
    copiar.classList.remove("ocultar");
    img.classList.add("ocultar");
}


function encriptar(stringEncriptado){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufer"]];
    console.table(matrizcodigo)
    stringEncriptado = stringEncriptado.toLowerCase()
    
    for(let i = 0; i< matrizcodigo.length;i++){
        if (stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.classList.add("ajustar");
    copiar.classList.remove("ocultar");
    img.classList.add("ocultar");

}

function desencriptar(stringDesencriptado){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufer"]];
    console.table(matrizcodigo)
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i = 0; i< matrizcodigo.length;i++){
        if (stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return stringDesencriptado
}


function btnCopiar(){
    mensaje.select();
    mensaje.setSelectionRange(0,99999);
    document.execCommand('copy');
    alert("Texto Copiado");
    copiar.classList.add("ocultar");
    mensaje.classList.remove("ajustar");
    img.classList.remove("ocultar");
    mensaje.value = "";
    mensaje.placeholder = "No hay ningun mensaje.";
    textArea.value = "";
    textArea.style.height = "auto";
}

