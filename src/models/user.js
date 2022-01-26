const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema(
    {
        name: {
            type: String,
            // required: [true, 'Nome é obrigatório'],
        },
        email: {
            type: String,
            // required: [true, 'E-mail é obrigatório'],
            unique: true,
        },
        password: {
            type: String,

        },
        photo: {
            type: String,

        },
        phone: {
            type: String,

        },
        documento: {
            tipo: {
                type: String,
                enum: ['cpf', 'cnpj'],

            },
            numero: {
                type: String,

            }
        },
        endereco: {
            cidade: String,
            uf: String,
            cep: String,
            logradouro: String,
            numero: String,
            pais: String,
        },

        birthday: {
            type: String,

        },
        dateSignUp: {
            type: Date,
            default: Date.now,

        },

        geo: {
            type: String,

        },
        creditcard: [{
            creditcarnumber: String,
            val: String,
            cvc: String

        }],

        status: {
            type: String,
            default: 'A',
            enum: ['A', 'I', 'P'],
        },
    });

user.index({
    geo: '2dsphere'

})

module.exports = mongoose.model('User', user)