let numeroMaximo = 10;
let listaNumeroSorteados = [];
let numero = numeroAleatorio();
let intentos = 0;



function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numero);
    if(numero === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else //cuando no acierta el usuario
        if(numero < numeroDeUsuario){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    return;

}

function asignarTextoElemento(elemento,texto){
    let elementohtml = document.querySelector(elemento);// conecta con  la etiquta h1 del html
    elementohtml.innerHTML = texto;
}

asignarTextoElemento('h1','Juego del Numero Secreto.');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);

function numeroAleatorio(){
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1; //encarga de generar el numeor aleatorio
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p',`El juego ah terminado`);
    }
    else{
        if(listaNumeroSorteados.includes(numeroSecreto)){   //con la funcion includes verifica si el numero ya esta en la lista
            return numeroAleatorio();   //se vuelve a llamar a si mismo la funcion
        }
        else{
            listaNumeroSorteados.push(numeroSecreto); //inserta el numero secreto a la lista
            return numeroSecreto;
        }
    }
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function reiniciarJuego(){
    limpiarCaja();
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numero = numeroAleatorio();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    intentos = 1;
}
