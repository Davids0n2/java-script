function Verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.querySelector('input#textano')
    var res = document.querySelector('div#resultado')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('box')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada você tem ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'cria-homem.jpg')
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'jovem-h.avif')
            } else if(idade < 70){
                //adulto
                img.setAttribute('src', 'idosinho-H.jpg')
            } else {
                window.alert(`[ERRO] Sua idade é inválida`)
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'cria-mulher.jpg')

            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'M-jovem.avif')

            } else if(idade < 70){
                //adulto
                img.setAttribute('src', 'idosinha-M.jgp')

            } else {
                window.alert(`[ERRO] Sua idade é inválida`)
            }
        }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}