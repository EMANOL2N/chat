### **README.md**

# Chat en Tiempo Real con CodeIgniter y Ratchet

## Descripción
Este es un chat en tiempo real desarrollado en PHP utilizando el framework **CodeIgniter 4** y la biblioteca **Ratchet** para manejar WebSockets. La aplicación permite a los usuarios comunicarse de manera instantánea con funcionalidades avanzadas como:

- Envío y recepción de mensajes de texto.
- Soporte de emojis.
- Indicador de estado de conexión (en línea/desconectado).
- Visualización de mensajes enviados, recibidos y leídos con iconos de verificación.
- Interfaz profesional con personalización de colores y fondo.
- Envío de mensajes con la tecla Enter.

## Características
- **Mensajería en Tiempo Real:** Comunicación instantánea utilizando WebSockets.
- **Indicador de Estado:** Un círculo verde o rojo indica si el servidor WebSocket está conectado o no.
- **Visualización de Estado de Mensajes:** Los mensajes muestran iconos de verificación para enviado, recibido y leído.
- **Soporte de Emojis:** Añade emojis a tus mensajes con un selector de emojis.
- **Interfaz Profesional:** Tema moderno con personalización del fondo y diseño centrado.
- **Envío Rápido de Mensajes:** Envía mensajes con la tecla Enter para una experiencia más rápida.

## Requisitos Previos
1. **XAMPP** (u otro entorno de servidor compatible con PHP 8.1.25 o superior).
2. **Composer** instalado en tu sistema.
3. **CodeIgniter 4** configurado.
4. **Ratchet WebSocket** instalado vía Composer.

## Instalación

### 1. Clonar el Repositorio
Clona el repositorio en tu directorio local:

```
git clone https://github.com/tuusuario/tu_repositorio.git
```

### 2. Navegar al Directorio del Proyecto
Accede al directorio clonado:

```
cd tu_repositorio
```

### 3. Instalar Dependencias
Usa Composer para instalar las dependencias del proyecto:

```
composer install
```

### 4. Configurar CodeIgniter
- Cambia el nombre del archivo `.env.example` a `.env` y configura el entorno de desarrollo:

```
CI_ENVIRONMENT = development
```

- Configura la URL base en el archivo `.env`:

```
app.baseURL = 'http://localhost:8080/'
```

### 5. Instalar Ratchet
Si no lo has hecho previamente, instala **Ratchet**:

```
composer require cboden/ratchet
```

### 6. Iniciar el Servidor WebSocket
En una terminal, ejecuta el servidor WebSocket:

```
php server.php
```

### 7. Iniciar el Servidor de CodeIgniter
En otra terminal, inicia el servidor de CodeIgniter:

```
php spark serve
```

## Uso

### 1. Acceder a la Aplicación
Abre tu navegador y ve a la siguiente URL:

```
http://localhost:8080/chat
```

### 2. Enviar Mensajes
- Escribe un mensaje en el campo de texto y presiona **Enter** o haz clic en el botón de enviar.
- Haz clic en los emojis para añadirlos a tus mensajes.

### 3. Indicador de Conexión
- Si el WebSocket está conectado, aparecerá un **círculo verde** junto al título "Chat en Tiempo Real".
- Si el servidor está desconectado, el círculo será **rojo**.

### 4. Estado de los Mensajes
- Los mensajes enviados por ti mostrarán un icono de una sola verificación (✔) para indicar que fue enviado.
- Cuando el mensaje es recibido por el otro usuario, mostrará dos verificaciones negras (✔✔).
- Si el mensaje ha sido leído, las verificaciones se volverán verdes (✔✔).

### 5. Soporte de Emojis
- Selecciona un emoji de la barra debajo del chat para añadirlo al mensaje.

### Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- **Controladores**: Manejan las solicitudes HTTP y responden con vistas.
- **Vistas**: Contienen el código HTML, CSS y JavaScript de la interfaz del usuario.
- **Servidor WebSocket (server.php)**: Gestiona las conexiones y comunicaciones entre los clientes.
- **Archivos Estáticos**: CSS y JavaScript para el estilo y funcionalidad de la aplicación.

### Archivos Clave
- `app/Views/chat_view.php`: Contiene la interfaz del chat y el código para la interacción en tiempo real.
- `app/Websocket/Chat.php`: Lógica del servidor WebSocket que maneja los mensajes entre clientes.
- `server.php`: Script que inicia el servidor WebSocket.

## Licencia
Este proyecto está bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más información.

## Autor

Emanol Tito - [LinkedIn](https://www.linkedin.com/in/emanol-jes%C3%BAs-tito-melo-ba9526327/)

### **Instrucciones Adicionales:**

- Asegúrate de ajustar las rutas de las capturas de pantalla si cambias la estructura de directorios.
- Actualiza cualquier referencia de GitHub a tu propio repositorio y autoría si lo necesitas.
- Puedes añadir más detalles sobre los pasos de instalación o configuración en función de las características adicionales que desees implementar.
