// Crie condicionais que desabilitam o botão de incrementar ou
// decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).

var currentNumberWrapper = document.getElementById('currentNumber'); //Elemento span
var currentNumber = 0;

function increment(){
    if(currentNumber < 10){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        alert("Número máximo atingido")
    }
}

function decrement(){
    if(currentNumber > 0){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        alert("Número mínimo atingido")
    }  
}
