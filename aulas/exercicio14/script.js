function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.jpg' 
        document.body.style.background = '#e2cd9f'
        
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        
    }else{
        //BOA NOITE
        img.src = 'linda-noite.avif'
        document.body.style.background = '#525254'
        
    }
}