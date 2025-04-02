let num = [1,2,5,7]
console.log(`Nosso vetor é o ${num}`)
num.push(2)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor é o ${num.length}`)
console.log(`Nosso vetor é o ${num.sort()}`)
/*for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}*/
for(let pos in num){
    console.log(num[pos])
}
