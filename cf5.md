
# Backend
## para inicializar un proyecto node
npm init -y

## para un crud instalar los sig modulos
npm i express
npm i nodemon //para que se actualice en tiempo real

## en package.js agrego para que nodemon pueda reiniciar el servidor cada vez q se pulsa ctrl+s
  "scripts": {
    "start": "nodemon index.js",

## tambien instalar cors
npm i cors //no se para que sirve

## crear un index.js en el directorio backend

### hacer un console log hola mundo y ver q este todo ok

## requerir express, cors y pg
## cors -> requerir cors
const express = require('express')
const cors = require('cors')
const { Pool, Client } = require('pg')
app.use(cors()); "no se q hace esto jaja - ver luego"
app.use(express.json());


## armar una ruta para enviar una peticion post
app.post('/bebidas', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
  })

## y ahora probar desde imsomnia el post http://127.0.0.1:3000/bebidas


# Conexion con la BD
## tener la bd postgres creada y con al menos una tabla