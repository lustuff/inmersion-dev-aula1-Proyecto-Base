let cantidad= document.getElementById ("cantidad");
let boton= document.getElementById("generar");
let contrasena= document.getElementById("contrasena");
let limpiarBoton= document.getElementById("limpiar");
let mensajeValidacion= document.getElementById("mensajeValidacion");

const cadenaCaracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
function generar (){

    let  numeroDigitado= parseInt (cantidad.value);
    console.log (numeroDigitado);
    if (numeroDigitado<8){
        alert("'La cantidad de caracteres tiene que ser mayor que 8"); 
}
let password= "";
for(let i=0;i< numeroDigitado;i++){
    let caracterAleatorio= cadenaCaracteres [Math.floor(Math.random ()* cadenaCaracteres.length)];
    console.log(caracterAleatorio);
    password +=caracterAleatorio;
}
contrasena.value=password;
validarContrasena(password);
}
function limpiar(){
    contrasena.value="";
    mensajeValidacion.textContent="";
}
function validarContrasena(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneEspecial = /[!@#$%^&*()]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        mensajeValidacion.textContent = "Contraseña fuerte.";
        mensajeValidacion.style.color = "green";  
    } else {
        mensajeValidacion.textContent = "Contraseña débil. Debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial.";
        mensajeValidacion.style.color = "red";  
    }
}


boton.addEventListener("click",generar);
limpiarBoton.addEventListener("click,",limpiar);










