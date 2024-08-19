function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idano')
    var res = document.getElementById('res')
     
    if (idano.value.length == 0 || Number(idano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else{
            var fsex = document.getElementsByName('sexo')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    //CRIANÇA
                    img.setAttribute('src', 'hbebe.jpg')
                } else if (idade < 21){
                    //JOVEM
                    img.setAttribute('src', 'hjovem.jpg')
                } else if(idade < 50){
                    //ADULTO
                    img.setAttribute('src', 'hadulto.jpg')
                } else{
                    //IDOSO
                    img.setAttribute('src', 'hidoso.jpg')
                }
            } else if (fsex[1].checked){
                genero ='Mulher'
                if(idade >= 0 && idade < 10){
                    //CRIANÇA
                    img.setAttribute('src', 'mbebe.jpg')
                } else if (idade < 21){
                    //JOVEM
                    img.setAttribute('src', 'mjovem.jpg')
                } else if(idade < 50){
                    //ADULTO
                    img.setAttribute('src', 'madulta.jpg')
                } else{
                    //IDOSO
                    img.setAttribute('src', 'midosa.jpg')
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.style.textAlign = 'center'
            res.appendChild(img)
            
        }
}