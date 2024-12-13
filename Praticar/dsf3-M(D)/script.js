function Verificar(){
    var date = new Date()
    var ano = data.getFllYear()
    var fano = document.querySelector('input#textano')
    var res = document.querySelector('div#resultado')

    if(fano.ariaValueMax.length >= 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        var fsex = document.getElementsByName('box')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada você tem ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
}