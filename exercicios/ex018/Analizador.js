let num = document.querySelector('txtn')
let lista = document.querySelector('f-lista')
let res = document.querySelector('res')
let valores = [ ]

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
            return false
        }
}

function inslista(n,1){

}
function add(){
    if(isnumero(num.value) && !inlista(num.value)){

    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}