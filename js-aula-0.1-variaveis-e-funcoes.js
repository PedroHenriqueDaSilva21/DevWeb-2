//DECLARAÇÃO DE VARIÁVEIS NO JS
//CONST X LET X VAR

const nome = "Diego";
// nome = "Afonso"
var idade;
var idade = 20;
idade = 10;
let cidade;
cidade = "Registro";

console.log(nome);
console.log(idade);
console.log(cidade);

/*----------------------------------------------------------------------------------------------------- */
//TYPEOF
const sobrenome = "Max";
const salario = 5000;
let endereco;
console.log(typeof salario);
console.log(typeof sobrenome);
console.log(typeof endereco);
/*----------------------------------------------------------------------------------------------------- */
//TIPOS DE FUNÇÕES
////FUNÇÕES SIMPLES
function minhaFuncao() {
  console.log("Olá Mundo");
}

minhaFuncao(); // Chamar a Função

//FUNÇÃO COM PARÂMETRO / ARGUMENTO
function saudacao(cidade, nome = "usuario") {
  // Cidade = obrigatorio / nome = opcional
  console.log("Olá, Bem Vindo " + nome + " de " + cidade);
}

saudacao("Registro"); // Enviando o argumento

function soma(n1, n2) {
  let resultado = n1 + n2;
  //Concatenando com Literal/Template strings ${} : placeholder
  console.log(`A soma dos numeros foi ${resultado}`);
}

soma(5, 5);

/********************************************************************************************************************************* */
//FUNCAO COM RETORNO
function Somar(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos numeros foi ${Somar(2, 6)}`);

// FUNÇÃO COM MAIS DE UM RETORNO

function parImpar(numero) {
  if (numero % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let numero = 5;
console.log(parImpar(numero));

///////////////////////////////////////
//Função Anônima
const dobro = function (x) {
  return x * 2;
};
console.log(` O Dobro do número é ${dobro(15)}`);

/////////////////////////////////////////////////
// ARROW FUNCTION (função anônima) - PARÂMETRO ÚNICO
const Dobro = (x) => {
  return x * 2;
};

console.log(Dobro(20));

//////////////////////////////////////////////////
//ARROW FUNCTION COM MAIS DE UM PARÂMETRO

const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

console.log(`O resultado da operação é ${calculadora(6, "*", 6)}`);

///////////////////////////////////////////////////////
//Função Imediata - IIFE (Immediately Invoked Function Expression)

const iife = function () {
  console.log("Executando Imediatamente");
}(); // Parâmetros

// IIFE COM PARÂMETRO

const start = (function(app){
    console.log(`Executando imediatamente o app ${app}`);
})("Whatsapp")
