// Tente implementar os eventos usando o método addEventListener.

var currentNumberWrapper = document.getElementById('currentNumber'); //Elemento span
var currentNumber = 0;

var buttonI = document.getElementsByName('adicionar');
var buttonD = document.getElementsByName('subtrair');

buttonI[0].addEventListener('click', () =>{
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
})

buttonD[0].addEventListener('click', () =>{
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
})