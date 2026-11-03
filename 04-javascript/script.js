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

// --- Exercícios de fixação ---

// 1. Cadastro de estudante
const nome = "Ana Silva";
const matricula = 202410123;
const curso = "Análise e Desenvolvimento de Sistemas";
const periodo = "2° Período";
const situacaoAcademica = "Matriculado";

console.log("--- DADOS DO ESTUDANTE ---");
console.log("Nome:", nome);
console.log("Matricula:", matricula);
console.log("Curso:", curso);
console.log("Período:", periodo);
console.log("Situação Acadêmica:", situacaoAcademica);

// 2. Compra
const precoUnitario = 150.0;
const quantidade = 3;
const valorTotal = precoUnitario * quantidade;

// Usando crases (`) para funcionar a interpolação com ${}
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);

// 3. Desconto
const precoOriginal = 200.0;
const taxaDesconto = 0.15; // 15%

const valorDesconto = precoOriginal * taxaDesconto;
const precoFinal = precoOriginal - valorDesconto;

console.log(`Preço original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Desconto (15%): R$ ${valorDesconto.toFixed(2)}`);
console.log(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);

// 4. Comparação
// Usado 'let' em vez de 'const' para permitir reatribuir o valor no exercício 5
let idade = 20;

console.log("Idade testada:", idade);
console.log("Maior que 18 (idade > 18):", idade > 18); // true
console.log("Menor que 18 (idade < 18):", idade < 18); // false
console.log("Igual a 18 (idade === 18):", idade === 18); // false
console.log("Maior ou igual a 18 (idade >= 18):", idade >= 18); // true

// 5. Operadores lógicos
// Reatribuindo o valor de idade sem usar a palavra 'const' novamente
idade = 22;
const possuiCadastro = true;
const contaAtiva = true;

// 1. Idade mínima (>= 18) E possui cadastro
const idadeMinimaECadastro = idade >= 18 && possuiCadastro;
console.log("Tem idade mínima E cadastro?", idadeMinimaECadastro); // true

// 2. Conta ativa OU cadastro
const contaAtivaOuCadastro = contaAtiva || possuiCadastro;
console.log("Conta ativa OU cadastro?", contaAtivaOuCadastro); // true

// 3. Conta NÃO ativa
const contaNaoAtiva = !contaAtiva;
console.log("A conta NÃO está ativa?", contaNaoAtiva); // false

// 6. Par ou ímpar
const numero = 7;

if (numero % 2 === 0) {
  console.log(`O número ${numero} é PAR.`);
} else {
  console.log(`O número ${numero} é ÍMPAR.`);
}
