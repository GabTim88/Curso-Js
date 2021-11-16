var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert("Valor inválido ou já encontrado em lista")
    }
    num.value = ''
    num.focus()
}

function fim() {
    if (valores.length == 0) {
        alert('Adicione valores para finalizar.')
    } else {
        var total = valores.length
        var maior = valores [0]
        var menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
             if (valores[pos] > maior) 
             maior = valores[pos]
             if (valores[pos] < menor)
             menor = valores[pos]
    }
    media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média desses valores é ${media}.`
    }

}