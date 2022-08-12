function showEvents(){
   
    const userName = document.getElementById("name-comentario").value;
    const mail = document.getElementById("mail-comentario").value;
    const tel = document.getElementById("tel-comentario").value;
    const comentario = document.getElementById("comentario").value;
    
    console.log(userName);
    console.log(mail);
    console.log(tel);
    console.log(comentario);
}

const btnEnvio = document.getElementById('btn-envio');

btnEnvio.addEventListener('click', showEvents)