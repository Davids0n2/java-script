function pedirnumero(){
    const input = prompt('Digite um número interido positivo:')
    const numero = parseInt(input, 10)
    if (isNaN(numero) || numero <=0 ){
        console.log("Por favor, insira um némero inteiro positivo válido.")
        return pedirnumero()
    }
    return numero;
}

function somaComWhile(n) {
    let soma = 0
    let i = 1
    while(i <= n){
        soma += i
        i++
    }
    return soma
}

const somaWhile = somaComWhile(numero)
const somaDoWhile = somaComWhile(numero)

console.log(`A soma dos números de 1 até ${numero} usando while é ${somaWhile}`)
console.log(`A soma dos números de 1 até ${numero} usando do...while é: é ${somaWhile}`)