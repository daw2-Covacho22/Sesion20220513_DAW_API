//mongodb+srv://covacho_sara:Daw2_2021@cluster0.olbhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose')

const DB_USER = 'covacho_sara'
const DB_PASS =  'Daw2_2021'
const DB_NAME = 'bd_daw_productos'

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.olbhw.mongodb.net/
${DB_NAME}?retryWrites=true&w=majority`


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

module.exports = db