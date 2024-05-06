// Seleciona os elementos do DOM
const presentation = document.getElementById('presentation') //tela inicial
const conversation = document.getElementById('conversation') //tela do chat
const teclado = document.getElementById('teclado') //input de enviar mensagens
const enviar = document.getElementById('send-button') //botão de enviar mensagens
const chat = document.getElementById('content') // conteudo do chat

// Seleciona todos os elementos com a classe 'sent-time' para exibir a hora de envio das mensagens
const horaEnvio = document.querySelectorAll('.sent-time');

// Obtém a hora atual
const agora = new Date();
const hora = agora.getHours();
const minutos = agora.getMinutes();
const stringHora = `${hora}:${minutos}`

// Define a hora de envio para cada elemento com a classe 'sent-time'
document.addEventListener('DOMContentLoaded', function(){
    horaEnvio.forEach(element => {
        element.innerHTML = stringHora;
    });
})

// Evento de clique no botão abre a primeira conversa
document.getElementById('funcional').addEventListener('click',function (){
    // Esconde a apresentação e exibe a conversa
    presentation.style.display =  'none'
    conversation.style.display = 'flex'
})

// Variável para alternar entre mensagens enviadas pelo usuário e pelo interlocutor
let alternate = 0;

// Evento de tecla pressionada
document.addEventListener('keydown', function(event){
    // Verifica se a tecla pressionada é 'Esc'
    if(event.key == 'Escape'){
        // Volta para a apresentação
        presentation.style.display =  'flex'
        conversation.style.display = 'none'
    }

    // Verifica se a tecla pressionada é 'Enter' e se o campo de texto não está vazio
    if(event.key == 'Enter' && teclado.value != '' && alternate == 0){
        // Cria e adiciona uma mensagem enviada pelo usuário
        let yourMessage =  '<div class="message your-message">'+
                        `<p id="message-content">${teclado.value}</p>`+
                        `<span class="sent-time">${stringHora}</span>`+
                    '</div>';
        chat.innerHTML += yourMessage;
        teclado.value = '';
        alternate = 1
        teclado.focus()
    }else if (event.key == 'Enter' && teclado.value != '' && alternate == 1){
        // Cria e adiciona uma mensagem enviada pelo interlocutor
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

// Evento de tecla liberada
document.addEventListener('keyup', function(){
    // Alterna entre ícone de envio e de microfone conforme o campo de texto está vazio ou não
    if(teclado.value != ''){
        enviar.innerHTML = '<i class="fa-solid fa-paper-plane"></i>'
    }else{
        enviar.innerHTML = '<i class="fa-solid fa-microphone"></i>'
    }
})

// Evento de clique no botão de enviar
enviar.addEventListener('click', function(){
    // Verifica se o campo de texto não está vazio e qual o último tipo de mensagem enviada
    if( teclado.value != '' && alternate == 0){
        // Cria e adiciona uma mensagem enviada pelo usuário
        let yourMessage =  '<div class="message your-message">'+
                        `<p id="message-content">${teclado.value}</p>`+
                        `<span class="sent-time">${stringHora}</span>`+
                    '</div>';
        chat.innerHTML += yourMessage;
        teclado.value = '';
        alternate = 1
        teclado.focus()
    }else if (teclado.value != '' && alternate == 1){
        // Cria e adiciona uma mensagem enviada pelo interlocutor
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
