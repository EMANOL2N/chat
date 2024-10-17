<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat en Tiempo Real</title>

    <!-- Enlace al archivo CSS -->
    <link rel="stylesheet" href="/assets/css/styles.css">

    <!-- Font Awesome para los íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div id="chat-container">
        <div id="header-container">
            <h1>Chat en Tiempo Real</h1>
            <span id="status-indicator"></span>
        </div>
        <div id="chat"></div>
        <div id="message-container">
            <input type="text" id="message" placeholder="Escribe tu mensaje">
            <button id="send">
                <i class="fas fa-paper-plane"></i> <!-- Icono de enviar -->
            </button>
        </div>
        <div id="emoji-picker">
            <span class="emoji">😊</span>
            <span class="emoji">😂</span>
            <span class="emoji">❤️</span>
            <span class="emoji">👍</span>
            <span class="emoji">🎉</span>
            <span class="emoji">😎</span>
        </div>
    </div>

    <!-- Enlace al archivo JavaScript -->
    <script src="/assets/js/script.js"></script>
</body>
</html>
