let num = [5 , 8 , 2 , 9 , 3]
num.push(1) // num.push(1) adiciona o número 1 ao final do vetor
num.sort() // num.sort()  ordena os números em ordem crescente
num.length // num.length mostra a quantidade de elementos do vetor
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4) // num.indexOf(4) mostra a posição do número 4 no vetor
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}