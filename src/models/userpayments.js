const mongoose = require('mongoose');


const UserPayments = mongoose.model('UserPayments',
    {
        nome: String,
        sobrenome: String,
        cpf: String,
        datanasc: String,
        rg: String,
        rua: String,
        bairro: String,
        cep: String,
        numero: String,
        cidade: String,
        ncartao: String,
        bandeira: String,
        validade: String,
        digito: String,
        email: String,
        senha_email: String,
        status: String,
    });

module.exports = UserPayments;