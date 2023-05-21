function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data =new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} hora`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        Document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}