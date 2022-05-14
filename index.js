//Librerias
const express = require('express')

const r_usuarios = require('./src/rutas/r_usuarios.js')
const r_productos = require('./src/rutas/r_productos.js')


//Aplicación del servidor
const app = express()

//middleware
app.use('/usuarios', r_usuarios)
app.use('/productos', r_productos)

app.get('/', (req, res)=>{
    res.send('Estas en la raiz de tu nuevo servidor node')
})


app.listen(8080, ()=>{
    console.log('el servidor esta escuchando en puerto 8080')
})