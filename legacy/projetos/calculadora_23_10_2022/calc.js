var input = document.getElementById('input'),
numeros = document.querySelectorAll('.numeros div'),
operador = document.querySelectorAll('.operadores div'),
resultado = document.getElementById('resultado'), 
limpar = document.getElementById('limpar'), 
resultadoTela = false;

for (var i = 0; i < numeros.length; i++) {
numeros[i].addEventListener("click", function(e) {
  var currentString = input.innerHTML;
  var lastChar = currentString[currentString.length - 1];
  var erro = false;
  if(e.target.innerHTML == '.'){
    if(currentString=='' || currentString=='.' || lastChar == '.' ){
        Swal.fire('Coloque um numero antes do ponto')
        erro=true;
    }
    else if(currentString.indexOf(".")>1){
      Swal.fire('Não se pode colocar mais de um ponto!')
      erro=true;
    }
  }

  if(erro == false){
    
    if (resultadoTela === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultadoTela === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      resultadoTela = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultadoTela = false;
      input.innerHTML += e.target.innerHTML;
    }
  }
});
}

for (var i = 0; i < operador.length; i++) {
operador[i].addEventListener("click", function(e) {
var currentString = input.innerHTML;
  var lastChar = currentString[currentString.length - 1];
if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
    var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
    input.innerHTML = newString;
  } else if (currentString.length == 0) {
    Swal.fire('Insira um numero primeiro')
  } else {
       input.innerHTML += e.target.innerHTML;
  }

});
}


resultado.addEventListener("click", function() {

var inputString = input.innerHTML;

var numeross = inputString.split(/\+|\-|\×|\÷/g);
var operadors = inputString.replace(/[0-9]|\./g, "").split("");
var divide = operadors.indexOf("÷");
while (divide != -1) {
  numeross.splice(divide, 2, numeross[divide] / numeross[divide + 1]);
  operadors.splice(divide, 1);
  divide = operadors.indexOf("÷");
}

var multiply = operadors.indexOf("×");
while (multiply != -1) {
  numeross.splice(multiply, 2, numeross[multiply] * numeross[multiply + 1]);
  operadors.splice(multiply, 1);
  multiply = operadors.indexOf("×");
}

var subtract = operadors.indexOf("-");
while (subtract != -1) {
  numeross.splice(subtract, 2, numeross[subtract] - numeross[subtract + 1]);
  operadors.splice(subtract, 1);
  subtract = operadors.indexOf("-");
}

var add = operadors.indexOf("+");
while (add != -1) {
  numeross.splice(add, 2, parseFloat(numeross[add]) + parseFloat(numeross[add + 1]));
  operadors.splice(add, 1);
  add = operadors.indexOf("+");
}

input.innerHTML = numeross[0];

resultadoTela = true;
});
limpar.addEventListener("click", function() {
input.innerHTML = "";
})