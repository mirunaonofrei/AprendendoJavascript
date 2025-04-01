function contar(){
    var num_inicio = Number(document.getElementById('inicio').value)
    var num_fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var contagem = document.getElementById('paragrafo')

    contagem.innerHTML = `${num_inicio} -> `
    num_inicio = num_inicio + passo

    while (num_inicio < num_fim) {
        var aux = document.createTextNode(`${num_inicio}  -> `)
        contagem.appendChild(aux)
        num_inicio = num_inicio + passo
    }
    
    var aux2 = document.createTextNode(`FIM`)
    contagem.appendChild(aux2)
}
//tentar fazer usando o for