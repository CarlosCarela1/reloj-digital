let hora = document.getElementById("hora");
    let fecha = document.getElementById("fecha")
    
    setInterval(relojDigital=()=>{
        let horario = new Date;
        let Hora = horario.getHours();
        if(Hora > 12){
            Hora = Hora - 12;
        }else{
            Hora
        }
        let Minutos = horario.getMinutes();
        let Segundos = cambiarFormato(horario.getSeconds());
        let day = cambiarFormato(horario.getDay())
        hora.innerHTML = `<p>${Hora}: ${Minutos}: ${Segundos}</p>`;


        let year = horario.getFullYear()
        let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept","Oct", "Nov", "Dic"];
        let dias = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];
        let mes = meses[horario.getMonth()];
        let Dias = dias[horario.getDay()]
        let diaMes = horario.getDate();

        fecha.innerHTML = `<p>${Dias}, ${diaMes} ${mes} ${year}</p>`;
            
    }, 1000)

 const cambiarFormato = (hora)=>{
    if(hora < 10){
        hora = "0" + hora;
    }
    return hora

 }