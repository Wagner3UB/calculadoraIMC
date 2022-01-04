const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultadoNome = document.querySelector("#resultado h2");
  const resultadoTexto = document.querySelector("#resultado p");
  let classificacao = "";

  if(nome !== "" && altura !== "" && peso !== ""){

    const valorIMC = peso / (altura ** 2);

    if(peso <= 0 || altura <= 0){
      resultadoTexto.innerHTML = "<i>Preencha um valor positivo para seu peso e altura</i>";
    } else {
      if (valorIMC < 18.5){
        classificacao = "está abaixo do peso.";
      }else if(valorIMC < 25){
        classificacao = "está com o peso ideal.";
      }else if(valorIMC < 30){
        classificacao = "está com sobrepeso.";
      }else {
        classificacao = "está com obesidade.";
      }
      resultadoNome.textContent = `${nome}:`;
      resultadoTexto.textContent = `seu IMC é ${valorIMC.toFixed(2)} e você ${classificacao}`;
    }   
  } else {
    resultadoTexto.innerHTML = "<i>Preencha os campos</i>";
  }
};

calcular.addEventListener("click", imc);
