let num = document.querySelector('#txtn')
let lista = document.querySelector('#f-lista')
let res = document.querySelector('#res')
let valores = [ ]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
            return false
        }
}

function insLista(n, l ){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumero(num.value) && !insLista(num.value, valores)){
        window.alert('Valor adicionado com sucesso!')
        valores.push(Number(num.value))
        let item =document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ' ' // quando eu adiciono um número, o resultado é limpo para não mostrar o resultado da finalização anterior.
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length // Guarda a quantidade de números
        res.innerHTML = ' ' // Limpa o resultado anterior
        let maior = valores[0] // Assume o 1º número como maior (ponto de partida)
        let menor = valores[0] // Assume o 1º número como menor (ponto de partida)
        let soma = 0 // Variável para guardar a soma de todos os números
        let media = 0 // Variável para guardar a média dos números
        for(let pos in valores){ // Loop que percorre cada posição do array valores
            soma += valores[pos] // Pega cada número e soma com os anteriores (+=)
            if(valores[pos] > maior) // Se o número atual é maior que o maior guardado
                maior = valores[pos] // Atualiza o maior com o número atual
            if(valores[pos] < menor) // Se o número atual é menor que o menor guardado
                menor = valores[pos] // Atualiza o menor com o número atual
        }

        media = soma / tot // Divide a soma pela quantidade para achar a média
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` // Exibe a quantidade total
        res.innerHTML += `<p> O maior valor informdo é ${maior} e o menor valor informado é ${menor} </p>` // Exibe maior e menor
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} e a média é ${media} </p>` // Exibe soma total e média
    }
    

}