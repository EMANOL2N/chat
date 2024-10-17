var conn = new WebSocket('ws://localhost:8081');  // Asegúrate de que el puerto sea correcto
var chat = document.getElementById('chat');
var sendButton = document.getElementById('send');
var messageInput = document.getElementById('message');
var statusIndicator = document.getElementById('status-indicator');

// Cambia el color del indicador dependiendo del estado de la conexión
function updateStatusIndicator(isConnected) {
    if (isConnected) {
        statusIndicator.style.backgroundColor = 'green';  // Conexión establecida
    } else {
        statusIndicator.style.backgroundColor = 'red';  // Conexión fallida
    }
}

// Función para crear un mensaje con avatar de imagen y estado de las aspas
function createMessage(content, type, identifier, status) {
    var msgDiv = document.createElement('div');
    msgDiv.classList.add('message', type);  // Clase enviada o recibida

    // Crear avatar (imagen en lugar de letra)
    var avatar = document.createElement('div');
    avatar.classList.add('avatar');

    var avatarImage = document.createElement('img');
    avatarImage.src = identifier === 'T' ? '/assets/images/perfil1.png' : '/assets/images/perfil2.png';  // Cambia según el usuario
    avatar.appendChild(avatarImage);

    // Crear el texto del mensaje
    var msgText = document.createElement('div');
    msgText.classList.add('message-text');
    msgText.textContent = content;

    // Crear el estado del mensaje (enviado, recibido, leído)
    var msgStatus = document.createElement('span');
    msgStatus.classList.add('message-status', status);
    if (status === 'sent') {
        msgStatus.innerHTML = '<i class="fas fa-check"></i>';  // Una aspa para "enviado"
    } else if (status === 'received') {
        msgStatus.innerHTML = '<i class="fas fa-check-double"></i>';  // Dos aspas negras para "recibido"
    } else if (status === 'read') {
        msgStatus.innerHTML = '<i class="fas fa-check-double"></i>';  // Dos aspas verdes para "leído"
        msgStatus.style.color = 'green';
    }

    // Agregar avatar, texto del mensaje y estado al contenedor del mensaje
    msgDiv.appendChild(avatar);
    msgDiv.appendChild(msgText);
    msgDiv.appendChild(msgStatus);

    // Agregar el mensaje al chat
    chat.appendChild(msgDiv);
    chat.scrollTop = chat.scrollHeight;  // Auto-scroll
}

// Cuando se abre la conexión
conn.onopen = function(e) {
    updateStatusIndicator(true);
};

// Cuando se cierra la conexión
conn.onclose = function(e) {
    updateStatusIndicator(false);
};

// Cuando se recibe un mensaje del servidor
conn.onmessage = function(e) {
    createMessage(e.data, 'received', 'E', 'read');
};

function sendMessage() {
    var msg = messageInput.value;
    if (msg.trim() !== "") {
        conn.send(msg);
        createMessage(msg, 'sent', 'T', 'sent');
        messageInput.value = '';

        setTimeout(function() {
            var lastMessageStatus = chat.querySelectorAll('.message-status');
            lastMessageStatus[lastMessageStatus.length - 1].classList.replace('sent', 'received');
            lastMessageStatus[lastMessageStatus.length - 1].innerHTML = '<i class="fas fa-check-double"></i>';

            setTimeout(function() {
                lastMessageStatus[lastMessageStatus.length - 1].classList.replace('received', 'read');
                lastMessageStatus[lastMessageStatus.length - 1].style.color = 'green';
            }, 2000);
        }, 1000);
    }
}

sendButton.onclick = function() {
    sendMessage();
};

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();
    }
});

document.querySelectorAll('.emoji').forEach(function(emoji) {
    emoji.addEventListener('click', function() {
        messageInput.value += emoji.textContent;
    });
});
