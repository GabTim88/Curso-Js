function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //mesma coisa que criar um id com nome foto no html
        if (fsex[0].checked) {
            gênero = 'um homem'
            if (idade >=0 && idade <4) {
                //baby
                img.setAttribute('src', 'foto-menino-baby.png')
            } else if (idade <= 20) {
               //adls
               img.setAttribute('src', 'foto-menino-adls.png')
            } else if (idade < 40) {
                //jovem 
                img.setAttribute ('src', 'foto-homem-jovem.png')
            } else if (idade < 50) {
                //maduro
                img.setAttribute ('src', 'foto-homem.png')
            } else {
                //idoso
                img.setAttribute ('src', 'foto-senhor.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'uma mulher'
            if (idade >=0 && idade <4) {
                //baby
                img.setAttribute ('src' , 'foto-menina-baby.png')
            } else if (idade <= 16) {
                //adls
                img.setAttribute ('src' , 'foto-menina-adls.png')
            } else if (idade < 25) {
                //jovem 
                img.setAttribute ('src' , 'foto-mulher-jovem.png')
            } else if (idade < 50) {
                //maduro
                img.setAttribute ('src' , 'foto-mulher.png')
            } else {
                //idoso
                img.setAttribute ('src' , 'foto-senhora.png')
            }
    }
        //fsex[0].checked ? 'um homem':'uma mulher' (Também serve para indicar resultado a partir da seleção)
        
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}