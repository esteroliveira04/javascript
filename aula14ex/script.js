function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    

    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML='Impossível contar!'
    } else {
        res.innerHTML='Contando: <br>'

        var ninicio = Number(inicio.value)
        var nfim = Number(fim.value)
        var npasso = Number(passo.value)
        var c = ninicio

        if(npasso <= 0 ){
            window.alert('[ERRO] Passo inválido! Considerando passo 1.')
            npasso = 1
        }

        if(ninicio < nfim){
            //contagem crescente
            for(var c = ninicio; c <= nfim; c += npasso){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(var c = ninicio; c >= nfim; c -= npasso){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}