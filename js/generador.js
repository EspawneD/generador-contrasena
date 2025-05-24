console.log("JS cargado correctamente");
const resultado = document.getElementById('resultado');
const generador = document.getElementById('generador');
const inputMayus = document.getElementById('mayus');
const inputMinus = document.getElementById('minus');
const inputNumeros = document.getElementById('numeros');
const inputSimbolos = document.getElementById('simbolos');
const error = document.getElementById('error');
const inputLargo = document.getElementById('largo');

function validarOpciones(){
    let checkMayus = document.getElementById('mayus').checked;
    let checkMinus = document.getElementById('minus').checked;
    let checkNum = document.getElementById('numeros').checked;
    let checkSimb = document.getElementById('simbolos').checked;
    const checkLargo = parseInt(inputLargo.value);
    let msjError = '';
    if (checkLargo < 8 || checkLargo > 36 || isNaN(checkLargo)){
        msjError = 'Ingresa un número válido entre 8 a 36 carácteres.';
        error.textContent = msjError;
        return false;
    }

    else if ( !checkMayus && !checkMinus && !checkNum && !checkSimb){
        msjError = 'Seleccione al menos una de las opciones.';
        error.textContent = msjError;
        return false;
    }
    error.textContent = '';
    return true;
}

function generarContrasena(){
    let largo = parseInt(inputLargo.value);
    let mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minus = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let simb = '!@#$%^&*()_+[]{}|;:,.<>?';
    let checkMayus = inputMayus.checked;
    let checkMinus = inputMinus.checked;
    let checkNum = inputNumeros.checked;
    let checkSimb = inputSimbolos.checked;
    let caracteresDisponibles = '';
    

    if (checkMayus){
        caracteresDisponibles += mayus;
    }
    if (checkMinus){
        caracteresDisponibles += minus;
    }
    if (checkNum){
        caracteresDisponibles += num;
    }
    if (checkSimb){
        caracteresDisponibles += simb;
    }
    
    let password = '';
    for (let i = 0; i < largo; i++) {
    let randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
    password += caracteresDisponibles[randomIndex];
    }
    resultado.textContent = password;
    resultado.style.visibility = 'visible';
    
}

generador.addEventListener('click', () => {
  if  (validarOpciones()){
        generarContrasena();     
    }
});