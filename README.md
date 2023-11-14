# Practica_4


Este API gestiona información relacionada con TARDIS, dimensiones, planetas y personas.

# Base URL

La base URL para este API es <base_url> donde <base_url> es la URL en la que el servidor está alojado.

# Endpoints

# 1. Obtener información de todas las TARDIS

- **Endpoint:** /tardis
- **Método:** GET
- **Descripción:** Obtiene información de todas las TARDIS

# 2. Añadir nueva TARDIS

- **Endpoint:** /tardis
- **Método:** POST
- **Descripción:** Añade una nueva TARDIS a la base de datos.

# 3. Añadir nueva dimensión

- **Endpoint:** /dimension
- **Método:** POST
- **Descripción:** Añade una nueva dimensión a la base de datos.

# 4. Añadir nuevo planeta

- **Endpoint:** /Planeta
- **Método:** POST
- **Descripción:** Añade un nuevo planeta a la base de datos.

# 5. Añadir nueva persona

- **Endpoint:** /Persona
- **Método:** POST
- **Descripción:** Añade una nueva persona a la base de datos.

# 6. Actualizar información

- **Endpoint:** /tardis/:id
- **Método:** PUT
- **Descripción:** Actualiza la información de una TARDIS, una dimension , un planeta o una persona específica dependiendo de donde sea la ID.

# Configuración

Asegúrate de configurar las siguientes variables de entorno:

- MONGO_URL: URL de conexión a la base de datos MongoDB.
- PORT: Puerto en el que el servidor escuchará las solicitudes.
