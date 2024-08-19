function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12 ){
//BOM DIA!
img.src = 'manha.jpg'
document.body.style.background = '#e2cd9f'
msg.innerHTML += ' Bom dia!'
} else if (hora >= 12 && hora < 18) {
//BOA TARDE!
img.src = 'tarde.jpg'
document.body.style.background = '#b9846f'
msg.innerHTML += ' Boa tarde!'
} else {
//BOA NOITE!
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
    msg.innerHTML += ' Boa noite!'
}

}
