# itCrowdChallenge - Casanova Ramiro.


## Project Solution

# Back

- Developed using React, Node JS, Express, Sequelize y Postgres.
- In the Api I developed CRUDs for both products and brands
- Endpoints List :
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
- With time I would have loved to use TypeScript, the firsth days I tried but got stuck, so i decided to go forward with JS.

# Front

- On the Front side, I rendered a list of products and an admin menu, able to create, delete and update products, and to create and update brands (I skiped the delete option on brands to avoid association problems)
- Libraries used:
1. React-router-dom : For my routes in the front, I usually make all my apps with this library.
2. Formik : For forms creation, I learned it working on this project and I loved it, super useful.
3. Yup : For object validation, (in this case, forms) firsth time using it and I loved it.
4. React-icons : For icon use, i had used it before, super useful and simple.
5. SweetAlert2 : For personalized alerts.

## How to use this project locally

 1. Fork this repository to have a copy on your account.
 2. Clone the repository on your computer to start working.
 3. The repository has two directories: `api` and `client`. In this directories you will find both the code for the Back-end and Front-end
 4. Position yourself in the `api` directory and run `npm install` to install the corresponding dependencies.
 5. Position yourself in the `client` directory and run `npm install` to install the corresponding dependencies.
 6. In postgres create a Data Base called: `itCrowd`
 7. In `api` create a file called: `.env` with the following variables:

```
PORT=3001
DB_USER=[your postgres username]
DB_PASSWORD=[your postgres Password]
DB_HOST=localhost
DB_NAME=itCrowd
```
 8.  Position yourself in the `api` directory and run `npm start` or `npm run dev` to get the server running. 
 Open [http://localhost:3001](http://localhost:3001) to see it working on the browser.
 9.  Position yourself in the `client` directory and run `npm run dev` to start the server. 
Open [http://localhost:3000](http://localhost:3000) to see the app working on the browser.

## Deploy Link
- https://casanova-ramiro-itcrowd-challenge.vercel.app/


## Español
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
 8.  Posicionarse dentro del directorio de `api` y realizar `npm start` o `npm run dev` para iniciar el servidor. 
 Abrir [http://localhost:3001](http://localhost:3001) para visualizarlo en el navegador.
 9.  Posicionarse dentro del directorio de `client` y realizar `npm run dev` para iniciar el servidor. 
Abrir [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

## Link del Deploy
- https://casanova-ramiro-itcrowd-challenge.vercel.app/