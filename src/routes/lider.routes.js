const express = require('express')

const router = express.Router()
const Busboy = require('busboy')
const liderCelula = require('../models/liderCelula')




router.post('/', (req, res) => {

    try {

        res.json({ error: false })

    } catch (error) {

        res.json({ error })
    }

})




module.exports = router;