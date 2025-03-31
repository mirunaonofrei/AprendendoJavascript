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
        if (idade < 18) {
            if (fsex[0].checked) {
                genero = 'Homem'
            } else {
                genero = 'Mulher'
            }

        } else if (idade < 60) {
            if (fsex[0].checked) {
                genero = 'Homem'
            } else {
                genero = 'Mulher'
            }
        } else {
            if (fsex[0].checked) {
                genero = 'Homem'
            } else {
                genero = 'Mulher'
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos!`
    }
}