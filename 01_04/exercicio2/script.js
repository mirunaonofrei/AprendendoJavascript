function tabuada() {
    let numf = document.getElementById('num')
    let tabuada = document.getElementById('tabuada')
    if (numf.value.length == 0) {
        window.alert("Preencha o campo de número!")
    } else {
        let num = Number(numf.value)
        let mult = 0
        tabuada.innerHTML = ""
        for (i = 1; i <= 10; i++) {
            mult = i * num
            tabuada.innerHTML += `${num} x ${i} = ${mult}<br>`
        }
    }
}