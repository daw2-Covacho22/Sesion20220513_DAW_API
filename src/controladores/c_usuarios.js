
module.exports = {
    leerUsuarios: (req, res)=>{
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