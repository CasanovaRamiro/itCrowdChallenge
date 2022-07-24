# itCrowdChallenge - Casanova Ramiro.

## Solucion del Proyecto

# Back

- Desarrollado utlizando React, Node JS, Express, Sequelize y Postgres.
- En la Api desarrolle CRUDs tanto para productos como para marcas
- Listado de endpoints :
1. Get Products /products
2. Get Products By ID /products/:id
3. Put Products /products/:id
4. Post Products /products
5. Delete Products /products/:id
6. Get Brands /brands
7. Get Brands By ID /brands/:id
8. Put Brands /brands/:id
9. Post Brands /brands
10. Delete Brands /brands/:id
- API URL: https://itcrowd-app.herokuapp.com/
- Con tiempo me hubiera encantado utilizar TypeScript, los primeros dias lo intenté y me trabé, decidi avanzar con js.

# Front

- Del lado del Front, hice un listado de productos y un menu para que el admin pueda crear borrar y eliminar productos, y crear y modificar marcas(no di la opcion de eliminarlas para no generar problemas con productos posiblemente asociados a esas marcas)
- Librerías utilizadas:
1. React-router-dom : Para mis rutas del front, suelo hacer todas mis apps con esta libreria.
2. Formik : Para creacion de formularios, la aprendi durante este projecto y me encantó super util.
3. Yup : Para validacion de objetos, (en este caso formularios) primera vez utilizandola y me encantó.
4. React-icons : Para utilizacion de Iconos, la habia utilizado previamete, super util y comoda.
5. SweetAlert2 : Para alertas personalizadas.

## Cómo utilizar el proyecto localmente

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas.
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar.
 3. El repositorio cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.
 4. Posicionarse dentro del directorio de `api` y realizar `npm install` para instalar las dependencias correspondientes.
 5. Posicionarse dentro del directorio de `client` y realizar `npm install` para instalar las dependencias correspondientes.
 6. Crear dentro de Postgres una nueva base de datos denominada: `itCrowd`
 7. En `api` crear un archivo llamado: `.env` que tenga las siguientes variables:

```
PORT=3001
DB_USER=[your postgres username]
DB_PASSWORD=[your postgres Password]
DB_HOST=localhost
DB_NAME=itCrowd
```
 8.  Posicionarse dentro del directorio de `api` y realizar `npm start` para iniciar el servidor. 
 Abrir [http://localhost:3001](http://localhost:3001) para visualizarlo en el navegador.
 9.  Posicionarse dentro del directorio de `client` y realizar `npm start` para iniciar el servidor. 
Abrir [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

## Link del Deploy
- https://casanova-ramiro-itcrowd-challenge.vercel.app/