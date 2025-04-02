let array = []
function adicionar(num) {
    let linha = document.getElementById("fin")
    let linha2 = document.getElementById("fin2")
    linha2.innerHTML = ""
    if (array.includes(num)) {
        window.alert("Esse número já foi adicionado!")
    } else {
        if (num > 100 || num < 1) {
            window.alert("O número precisa estar entre 1 e 100")
        } else {
            array.push(num)
            linha.innerHTML += `Valor ${num} adicionado<br>`
            document.getElementById('num').value = ""
            document.getElementById('num').focus()
        }
    }
}
function finalizar(){
    let linha = document.getElementById("fin2")
    linha.innerHTML = `Ao todo, temos ${array.length} números cadastrados.<br>`
    linha.innerHTML += `O maior valor informado foi ${maior()}.<br>`
    linha.innerHTML += `O menor valor informado foi ${menor()}.<br>`
    linha.innerHTML += `Somando todos os valores, temos ${soma()}.<br>`
    linha.innerHTML += `A média dos valores digitados é ${media()}.<br>`
}

function maior(){
    let maior = array[0]
    for(let num in array){
        if(array[num] > maior){
            maior = array[num]
        }
    }
    return maior
}

function menor(){
    let menor = array[0]
    for(let num in array){
        if(array[num] < menor){
            menor = array[num]
        }
    }
    return menor
}

function soma(){
    let soma = 0
    for(let num in array){
        soma += array[num]
    }
    return soma
}

function media(){
    let total = array.length
    return (soma()/total)
}