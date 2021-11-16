function soma(n1, n2) {
    return n1 + n2 
}

console.log(soma(23,11))

//ou

function soma(n1=0, n2=0) { //dessa forma ele cria o zero, se todos os param n for definido
    return n1 + n2
}
console.log (soma(11))
