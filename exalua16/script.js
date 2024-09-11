let num = document.getElementById('numero')
let lista = document.getElementById('mostrador')
let res = document.getElementById('res')
let valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        window.alert('Tudo ok!')
    } else {
        window.alert('Valor inválido ou encontrado na lista.')
    }
}