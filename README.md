# backendCRUDmysql Personas

## Descripción general

Proyecto backend para una aplicación CRUD (Create, Read, Update, Delete) orientada a la gestión de datos de personas. Implementado con Node.js, Express y MySQL, está diseñado para integrarse con un frontend Angular, ofreciendo una API RESTful eficiente y preparada para despliegue.

## Características principales

- API RESTful con Node.js y Express.
- Manejo de datos de personas en base de datos MySQL.
- Endpoints CRUD para entidades persona.
- Diseño pensado para integración con Angular.
- Configuración lista para despliegue en plataformas como Render.

## Estructura del repositorio

- `server.ts` o `app.js`: Archivo principal del servidor Express.
- `/controllers`: Controladores para acciones CRUD sobre personas.
- `/models`: Modelos de datos que representan a las personas en la BD.
- `/services`: Servicios auxiliares para operaciones específicas.
- `.env`: Variables de entorno para configuración de base de datos y puerto.
- `package.json`: Dependencias y scripts del proyecto.

## Instalación

1. Clona el repositorio:

git clone https://github.com/jsersan/crud-ang-back-mysql-personas.git
cd crud-ang-back-mysql-personas

2. Instala las dependencias:

npm install

3. Configura el archivo `.env` con datos de acceso a MySQL:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_bd
PORT=3000

## Uso

- Para ejecutar el servidor localmente:

npm start

- Accede a la API en: `http://localhost:3000/`.
- Puedes probar los endpoints CRUD mediante Postman o cualquier cliente HTTP.

## Endpoints principales

- `GET /personas`: Listar todas las personas.
- `POST /personas`: Crear una nueva persona.
- `PUT /personas/:id`: Actualizar persona existente.
- `DELETE /personas/:id`: Eliminar persona.

## Despliegue

- Preparado para despliegue en plataformas como Render.
- Configura variables de entorno adecuadamente en la plataforma de hosting.

## Créditos

Autor: [Txema Serrano](https://github.com/jsersan). Historial de commits disponible [aquí](https://github.com/jsersan/crud-ang-back-mysql-personas/commits/main).

## Licencia

No se especifica licencia, contactar al autor para usos o contribuciones.

