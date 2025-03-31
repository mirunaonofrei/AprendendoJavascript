function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = 'rgb(228, 250, 102)';
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'rgb(67, 193, 252)';
    } else{
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = 'rgb(119, 105, 185)';
    }
}