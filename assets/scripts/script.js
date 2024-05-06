
const presentation = document.getElementById('presentation')
const conversation = document.getElementById('conversation')
const teclado = document.getElementById('teclado')
const enviar = document.getElementById('send-button')
const chat = document.getElementById('content')

const horaEnvio = document.querySelectorAll('.sent-time');
const agora = new Date();
const hora = agora.getHours();
const minutos = agora.getMinutes();
const stringHora = `${hora}:${minutos}`

document.addEventListener('DOMContentLoaded', function(){
    horaEnvio.forEach(element => {
        element.innerHTML = stringHora;
    });
})




document.getElementById('funcional').addEventListener('click',function (){
    presentation.style.display =  'none'
    conversation.style.display = 'flex'
})

let alternate = 0;
document.addEventListener('keydown', function(event){


    if(event.key == 'Escape'){
        presentation.style.display =  'flex'
        conversation.style.display = 'none'
    }

    if(event.key == 'Enter' && teclado.value != '' && alternate == 0){
        let yourMessage =  '<div class="message your-message">'+
                        `<p id="message-content">${teclado.value}</p>`+
                        `<span class="sent-time">${stringHora}</span>`+
                    '</div>';
        chat.innerHTML += yourMessage;
        teclado.value = '';
        alternate = 1
        teclado.focus()
    }else if (event.key == 'Enter' && teclado.value != '' && alternate == 1){
        let myMessage = '<div class="message my-message">'+
                    `<p id="message-content">${teclado.value}</p>`+
                    `<span class="sent-time">${stringHora}</span>`+
                    '</div>';
        chat.innerHTML += myMessage
        teclado.value = ''
        alternate = 0
        teclado.focus()
    }
})

document.addEventListener('keyup', function(){
    if(teclado.value != ''){
        enviar.innerHTML = '<i class="fa-solid fa-paper-plane"></i>'
    }else{
        enviar.innerHTML = '<i class="fa-solid fa-microphone"></i>'
    }
})

enviar.addEventListener('click', function(){
    if( teclado.value != '' && alternate == 0){
        let yourMessage =  '<div class="message your-message">'+
                        `<p id="message-content">${teclado.value}</p>`+
                        `<span class="sent-time">${stringHora}</span>`+
                    '</div>';
        chat.innerHTML += yourMessage;
        teclado.value = '';
        alternate = 1
        teclado.focus()
    }else if (teclado.value != '' && alternate == 1){
        let myMessage = '<div class="message my-message">'+
                    `<p id="message-content">${teclado.value}</p>`+
                    `<span class="sent-time">${stringHora}</span>`+
                    '</div>';
        chat.innerHTML += myMessage
        teclado.value = ''
        alternate = 0
        teclado.focus()
    }
})

