/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Manupule-os nas funções. 
3. Exibir o resultado na tela

*/
// capturar as variáveis do HTML, com o const + querySelector + # e nome da ID, numero1 e 2. 
// parseFloat - função nativa do JS, números decimais. O parametro dela é o valor. 
// value - é valor númerico 

const botaoSubtrair = document.getElementById("subtrair")
const botaoMultiplicar = document.getElementById("multiplicar")
const botaoDividir = document.getElementById("dividir")

function somar() {
    const numero1 = parseFloat(document.querySelector("#numero1Soma").value)
    const numero2 = parseFloat(document.querySelector("#numero2Soma").value)

    const total = numero1 + numero2

    
    //innerHTML para manupular o resultado em negrito. 
    //ele é um conteúdo do P
    //buscar elemento id, a tag <paragrafo>
    //puxar o paragrafo e manipula-lo com o innerText 

    document.querySelector(".resultado") .setAttribute('id', 'resultadoSoma')
    //<p class="resultado" id ="resultadoSoma">Resultado: </p> SEM QUE ESTEJA NO HTML ELE ADD UMA ID PARA MANIPULAR, recebendo dois atributos. 


    const paragrafo = document.getElementById("resultadoSoma")
    const resultado = document.createElement('strong')
    paragrafo.appendChild(resultado)
    resultado.innerText = total
}

function subtrair() {
    const numero1 = parseFloat(document.querySelector("#numero1Sub").value)
    const numero2 = parseFloat(document.querySelector("#numero2Sub").value)

    const resultado = numero1 - numero2

    document.getElementById("resultadoSub").innerHTML = resultado     
}

function multiplicar() {
    const numero1 = parseFloat(document.querySelector("#numero1Mult").value)
    const numero2 = parseFloat(document.querySelector("#numero2Mult").value)
    
    const total = numero1 * numero2
     
    const pararagrafo = document.querySelector("#resultadoMult")
    const resultado = document.createElement('strong')
    pararagrafo.appendChild(resultado)
    resultado.innerText = total
   // document.getElementById("resultadoMult").innerHTML  

}

function dividir() {
 
    const numero1 = parseFloat(document.querySelector("#numero1Div").value)
    const numero2 = parseFloat(document.querySelector("#numero2Div").value)
    
    const resultado = numero1/numero2

    document.getElementById("resultadoDiv").innerHTML = resultado 

}

botaoSubtrair.addEventListener('click', subtrair)
botaoMultiplicar.addEventListener('click', multiplicar)
botaoDividir.addEventListener('click',dividir)
