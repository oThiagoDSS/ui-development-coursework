// 1. CALCULADORA DE OPERAÇÕES BÁSICAS
const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  const campo1 = document.getElementById("numero1");
  const campo2 = document.getElementById("numero2");
  const resultado = document.getElementById("resultado");

  if (campo1.value === "" || campo2.value === "") {
    resultado.textContent = "Preencha os dois números.";
    return;
  }

  const numero1 = Number(campo1.value);
  const numero2 = Number(campo2.value);
  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao =
    numero2 === 0 ? "Não é possível dividir por zero." : numero1 / numero2;

  resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});

// 2. LABORATÓRIO 3 - CALCULADORA DE MÉDIA
const btnMedia = document.getElementById("calcular");

btnMedia.addEventListener("click", function () {
  // 1. Seleção dos elementos do HTML
  const campoNota1 = document.getElementById("nota1");
  const campoNota2 = document.getElementById("nota2");
  const campoNota3 = document.getElementById("nota3");
  const resultadoMedia = document.getElementById("resultadoMedia");

  // 2. Validação: verifica se algum campo está vazio
  if (
    campoNota1.value === "" ||
    campoNota2.value === "" ||
    campoNota3.value === ""
  ) {
    resultadoMedia.textContent = "Preencha as três notas para calcular.";
    return;
  }

  // 3. Conversão dos valores de texto para número
  const nota1 = Number(campoNota1.value);
  const nota2 = Number(campoNota2.value);
  const nota3 = Number(campoNota3.value);

  // 4. Cálculo da média
  const media = (nota1 + nota2 + nota3) / 3;

  // 5. Exibição do resultado (toFixed(2) limita a 2 casas decimais)
  resultadoMedia.textContent = `A média final é: ${media.toFixed(2)}`;
});
