const mongoose = require('mongoose');

const { Schema } = mongoose;
const datosSchema = new Schema({
    Nombre: String,
    Apellido: String,
    Telefono: String,
    Rut: String,
    FechaNacimiento: Date,
    Email: String,
    Password: String,
}, { 
    timestamps: true,
    versionKey: false
});

const Datos = mongoose.model('Datos', datosSchema);
module.exports = Datos;