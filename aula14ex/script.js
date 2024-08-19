function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var ninicio = Number(inicio.value)
    var nfim = Number(fim.value)
    var npasso = Number(passo.value)

    var res = document.getElementById('res')
    

    if (npasso <= 0){
        alert('Passo inválido! Considerando PASSO 1')
        npasso = 1
    }
    

    if (ninicio < nfim){
        for (var c = ninicio; c <= fim; c+=npasso){
            res.innerHTML ++= (`${c} \u{1F449}`)
        }
            

    } else {
        for (var c = ninicio;c >= nfim;c-=passo){
            res.innerHTML = (`${c} \u{1F449}`)
        }
    }
    
}