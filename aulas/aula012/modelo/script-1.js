function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'cria-homem.jpg')
            }else if( idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-H.avif')
            } else if(idade < 70){
                //Adulto
                img.setAttribute('src', 'idosinho-h.jpg')

            }else{
                window.alert(`Tem ${idade} anos e sabe mexer na internet? sai dai, mentiroso!`)
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'cria-mulher.jpg')

            }else if( idade < 21){
                //Jovem
                img.setAttribute('src' , 'jovem-M.jpg')

            } else if(idade < 70){
                img.setAttribute('src' , 'idosinho-M.avif')
            }else{
                //Idoso
                window.alert(`Tem ${idade} anos e sabe mexer na internet? sai dai, mentiroso!`)
                
            }
        }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.style.textAlign = 'center'
        res.style.display = 'flex'
        res.appendChild(img)
    }
}