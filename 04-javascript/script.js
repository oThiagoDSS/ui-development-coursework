// 4.1. Preparação do ambiente
console.log("Olá, estudante de ADS!");
console.log("Minha primeira aplicação JavaScript.");

// 5. Variáveis e tipos de dados
let idade = 22; // pode receber outro valor
idade = 23;
const curso = "ADS"; // não pode ser reatribuído
console.log(idade, curso);

// 5.1. Tipos fundamentais
let nome = "João";
idade = 30;
let ativo = true;
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ativo);

// 6. Operadores JavaScript
let numero1 = 20;
let numero2 = 5;
console.log("Soma:", numero1 + numero2); // 25
console.log("Subtração:", numero1 - numero2); // 15
console.log("Produto:", numero1 * numero2); // 100
console.log("Divisão:", numero1 / numero2); // 4
console.log("Resto:", numero1 % numero2); // 0
console.log("Potência:", numero1 ** 2); // 400

// 6.2. Atribuição
let saldo = 100;
saldo += 50; // 150
saldo -= 20; // 130
saldo *= 2; // 260
saldo /= 4; // 65
console.log(saldo);

// 6.3. Comparação
console.log(10 == "10"); // true
console.log(10 === "10"); // false
// console.log(20 >= 18); // true

// 6.4. Lógicos
idade = 20;
const possuiCadastro = true;
const podeAcessar = idade >= 18 && possuiCadastro;
console.log(podeAcessar); // true

// Laboratório 1 - Cadastro simples de usuário
nome = "Lucas Ferreira";
const email = "lucas@gmail.com";
idade = 24;
let usuarioAtivo = true;

console.log("DADOS DO USUÁRIO");
console.log("Nome:", nome);
console.log("E-mail:", email);
console.log("Idade:", idade);
console.log("Usuário ativo:", usuarioAtivo);

// 8.3. JavaScript
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
