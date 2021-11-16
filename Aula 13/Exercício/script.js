function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hello = document.getElementById('hello')
    var data = new Date(); //var hora = data.getHours()
    //var hora = 2
    var hora = data.getHours();
    var min = data.getMinutes();
    var time = hora + ':' + min;
    msg.innerHTML = `Agora são ${time} h`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        hello.innerText = 'Bom dia!'
        document.body.style.background = '#F3D34A '

    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        hello.innerText = 'Boa tarde!'
        document.body.style.background = '#4281A4'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        hello.innerText = 'Boa noite!'
        document.body.style.background = '#0A2488'
    }
}