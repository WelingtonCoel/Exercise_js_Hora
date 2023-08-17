function carregar() {
    var msg =window.document.getElementById("msg")
    //var saud =window.document.getElementById("saud")
    var img =window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var mim = data.getMinutes()
    //var dia = data.getDate()
    msg.innerHTML = `Agora são ${hora}:${mim}.`
    
        // console.log(`Agora são ${hora} h!`)
    if (hora <= 12) {
        img.src = "fotomanha.png"
        //saud = ("bom dia")
        //console.log('Bom dia, hoje é')
        document.body.style.background = "#951"

    } else if (hora <= 18) {
        img.src = "fototarde.png"
       // saud = ("boa tarde")
        //console.log('Boa tarde, hoje é')
        document.body.style.background = "#6586"

    } else {
        img.src = "fotonoite.png"
        console.log('Boa noite, hoje é')
        document.body.style.background = "#222"
    }

    //console.log(diaSem)  //Uncoment the last comand to output the number that represent the day
    // 0 = dom, 1 = seg, 2 = ter, 3 = qua, 4 = qui, 5 = sex, 6 = sab

    //diaSem = 7 // Edit the number in the last comand to output the day that you want
    switch (diaSem) {
        case 0:
            console.log('Domingo')
            break
        case 1:
            console.log('Segunda')
            break
        case 2:
            console.log('Terça')
            break
        case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 6:
            console.log('Sabado')
            break
        default:
            console.log('Error, no recognized insert')
            break
    }
}
