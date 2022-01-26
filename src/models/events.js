const mongoose = require('mongoose');


const Events = mongoose.model('Events',
    {
        name: {
            type: String,
            required: [true, 'Nome é obrigatório'],
        },
        photo: {
            type: [String],
            required: [true, 'Foto é obrigatório'],
        },
        dateSignUp: {
            type: String,
            default: Date.now()
        },

        status: {
            type: String,
            default: 'P',
            enum: ['A', 'I', 'P'],
        },
    });

module.exports = Events;