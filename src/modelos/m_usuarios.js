const mongoose = require('mongoose')

//Creamos el esquema
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    email: String
})

//Creamos el modelo
const m_usuarios = mongoose.model('usuarios', usuarioSchema)

module.exports = m_usuarios