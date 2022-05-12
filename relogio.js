const relogio = setInterval(function time(){
    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

     if (hr > 5 && hr < 12 ){
         document.body.style.backgroundImage = "url(./img/morning.jpg)"
    }else if (hr > 11 && hr < 17 ){
         document.body.style.backgroundImage = "url(./img/tarde.jpg)"
    }else if (hr > 16 && hr < 19 ){
         document.body.style.backgroundImage = "url(./img/fimdetarde.jpg)"
    }else if (hr > 18 || hr >=0  ){
         document.body.style.backgroundImage = "url(./img/noite.jpg)"
    }

    if(hr <10) {hr = '0' + hr}
    if(min <10){ min = '0' + min}
    if(sec <10){ sec = '0' + sec}
    
    segundos.innerHTML = `${sec}`
    minutos.innerHTML = `${min}`
    horas.innerHTML = `${hr}`
     
})
