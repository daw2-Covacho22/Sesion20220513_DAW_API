const express = require ('express')
const {leerUsuarios, leerUsuarioId, crearUsuario, editarUsuarioId, 
borrarUsuarioId} = require('../controladores/c_usuarios.js')
const r_usuarios = express.Router()

//- get a /usuarios -->leerUsuarios()
r_usuarios.get('/', leerUsuarios)

//- get a /usuarios/:id -->leerUsuarioId()
r_usuarios.get('/:id', leerUsuarioId)

//- post a /usuarios -->crearUsuario()
r_usuarios.post('/', crearUsuario)

//- put a /usuarios/:id -->editarUsuarioId()
r_usuarios.put('/:id', editarUsuarioId)

//- delete a /usuarios/:id -->borrarUsuarioId()
r_usuarios.delete('/:id', borrarUsuarioId)

module.exports = r_usuarios


