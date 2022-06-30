var currentNumberWrapper = document.getElementById('currentNumber'); //Elemento span
var currentNumber = 0;

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}
