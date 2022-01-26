const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const liderCelula = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Nome é obrigatório'],
        },
        email: {
            type: String,
            required: [true, 'E-mail é obrigatório'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Senha é obrigatório'],
        },
        photo: {
            type: String,
            required: [true, 'Foto é obrigatório'],
        },
        phone: {
            type: String,
            required: [true, 'Telefone é obrigatório'],
        },
        social_network: [{
            type: String
        }]
    }

)




module.exports = mongoose.model('LiderCelula', liderCelula)