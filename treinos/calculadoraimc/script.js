function calcular(){
var altur = document.getElementById('altura')
var pes = document.getElementById('peso')
var altura = Number(altur.value)
var peso = Number(pes.value)
var res = document.getElementById('res')
var cond = document.getElementById('condicao')

if(altur.value.length == 0 || pes.value.length == 0 ){
    window.alert('[ERRO] Valores inválidos.')
} else {
    res.innerHTML = ''
    var calc = peso / (altura * altura)
    var imc = calc.toFixed(2)
    res.innerHTML += (` Seu índice de massa corporal é de ${imc}.`)

    if(imc < 18.5){
        cond.innerHTML = 'MAGREZA'
    } else if (imc < 24.9){
        cond.innerHTML = 'NORMAL'
    } else if (imc < 29.9){
        cond.innerHTML = 'SOBREPESO'
    } else if (imc < 39.9){
        cond.innerHTML = 'OBESIDADE'
    } else{
        cond.innerHTML = 'OBESIDADE GRAVE'
    }

}


}