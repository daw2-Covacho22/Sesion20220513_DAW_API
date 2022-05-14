

module.exports = {
    leerUsuarios: (req, res)=>{
        //leer de la base de dtos
        //Creamos el schema
        res.send('leer usuario')
    },
    leerUsuarioId: (req, res)=>{
        res.send('Estás en leerUsuarioId')
    },
    crearUsuario: (req, res)=>{
        res.send('Estás en crearUsuario')
    },
    editarUsuarioId: (req, res)=>{
        res.send('Estás en editarUsuarioId')
    },
    borrarUsuarioId: (req, res)=>{
        res.send('Estás en borrarUsuarioId')
    }
}