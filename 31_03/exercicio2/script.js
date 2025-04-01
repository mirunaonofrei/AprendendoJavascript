function vefificaidade() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var resultado = document.querySelector('div#foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (idade < 18) {
            if (fsex[0].checked) {
                genero = 'Homem'
                img.setAttribute('src','imagens/masc_crianca.jpg')
            } else {
                genero = 'Mulher'
                img.setAttribute('src','imagens/fem_crianca.jpg')
            }

        } else if (idade < 60) {
            if (fsex[0].checked) {
                genero = 'Homem'
                img.setAttribute('src','imagens/masc_adulto.jpg')
            } else {
                genero = 'Mulher'
                img.setAttribute('src','imagens/fem_adulto.jpg')
            }
        } else {
            if (fsex[0].checked) {
                genero = 'Homem'
                img.setAttribute('src','imagens/masc_idoso.jpg')
            } else {
                genero = 'Mulher'
                img.setAttribute('src','imagens/fem_idoso.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos!`
        resultado.appendChild(img)
    }
}