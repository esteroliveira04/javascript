function tabuada(){
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')

if (num.value.length == 0){
    window.alert('[ERRO] Insira um número!')
} else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    for(let c = 1; c <=10; c++)
    { let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
    /*while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
        */
}

}













/* function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
    window.alert('Por favor, digite um número!')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    }
    */