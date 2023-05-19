function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade >= 21 && idade < 60){
                //ADULTO
                img.setAttribute('src','foto-adulto-m.png')
                
            }else if(idade > 60){
                //velho
                img.setAttribute('src','foto-idoso.png')
            }
        }else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade >= 21 && idade < 60){
                //ADULTO
                img.setAttribute('src','foto-adulto-f.png')
                
            }else if(idade > 60){
                //velho
                img.setAttribute('src','foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}