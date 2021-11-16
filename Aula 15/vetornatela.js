let valores = [8, 5, 3, 4, 2]
valores.sort()
console.log(valores)
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(2)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
console.log(`O valor consultado está na posição ${pos}`)
}