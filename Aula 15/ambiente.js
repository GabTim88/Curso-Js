var num = [5, 8, 3, 2]

console.log(`Nosso vetor é o ${num}`)

num[4] = 1

console.log(`Se vc add num[4]=1: Agora é ${num}`)

num.push(8)

console.log(`Se vc adicionar push(8): Agora é ${num}`)

console.log(`Se vc escrever .length: O vetor tem ${num.length} elementos`)

/*let pos = num.indexOf(2)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
console.log(`O valor está na posição ${pos}`)
}*/
num.sort()

for (var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('Vamos novamente, agora com for in')

for (var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}