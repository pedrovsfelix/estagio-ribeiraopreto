// Estágio - Ribeirão Preto
// Pergunta 2 de 2
// Técnica:

// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
// anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
// informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número 
// informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser 
// previamente definido no código;

// Resposta: Ainda não sei como resolver.

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
// além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser 
// previamente definida no código;

// RESPOSTA:
const palavra = prompt("Informe a palavra: ").toLowerCase();
let contador = 0;

for(let i = 0; i < palavra.length; i++) {
    if(palavra[i] === 'a') {
        contador++;
    }
}

if(contador > 0) {
    alert(`A letra 'a' aparece ${contador} vezes.`);
} else {
    alert(`A letra 'a' não foi encontrada.`)
}

// 3) Observe o trecho de código abaixo: 
// int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 12;
let soma = 0;

for(let k = 1; k < indice; k++) {
    k = k + 1;
    soma = soma + k;
    console.log(soma)
}

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2, 10, 12, 16, 17, 18, 19, 20


// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. 
// Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas 
// vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para 
// descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

//RESPOSTA:
// Podemos ligar o interruptor 1 e esperar até que a temperatura da lâmpada aqueça, isso fará com que possamos ligar o interruptor 2 e ir até a uma sala checar qual lâmpada está "quente". 
// Desta forma, podemos encontrar 2 lâmpadas com apenas esta estratégia.

// NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU.