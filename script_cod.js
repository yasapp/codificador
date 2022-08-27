if(input == ""){
    frase_codificado = frase_modificado;
}

var input = document.querySelector("input");

function codificar(){
  var cadena = input.value;
     cadena = cadena.replace(/e/ig,"enter")
     cadena = cadena.replace(/i/ig,"imes")
     cadena = cadena.replace(/a/ig,"ai")
     cadena = cadena.replace(/o/ig,"ober")
     cadena = cadena.replace(/u/ig,"ufat");
     document.querySelector("#frase_codificado").innerHTML = cadena
     input.value="";                
    }

 function decodificar(){
  var cadena = input.value;
     cadena = cadena.replace(/imes/ig,"i")
     cadena = cadena.replace(/enter/ig,"e")      
     cadena = cadena.replace(/ai/igm,"a") 
     cadena = cadena.replace(/ober/ig,"o")
     cadena = cadena.replace(/ufat/ig,"u");
     document.querySelector("#frase_codificado").innerHTML = cadena 
     input.value=""; 
                   
    }

 const elemento = document.querySelector("#frase_codificado");

 function copiar(){                
    const inputOculto = document.createElement('input');
    inputOculto.setAttribute('value', elemento.innerHTML);
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand('copy');
    document.body.removeChild(inputOculto);
    alert("Texto copiado");
}