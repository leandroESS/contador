//Mude a cor do texto em CurrentNumber para vermelho quando o número for negativo.

var currentNumberWrapper = document.getElementById('currentNumber'); //Elemento span
var currentNumber = 0;

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){           
       currentNumber--;
       currentNumberWrapper.innerHTML = currentNumber;
       if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
       }
}
