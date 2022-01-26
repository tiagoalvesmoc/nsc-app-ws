const express = require('express')

const router = express.Router()
const Events = require('../models/events')



//GET TODOS OS REGISTROS

router.get('/events', async (req, res) => {

    // const user = await Events.find({})

    res.json({ error: false, mesage: "Ok" })


})
//GET UM REGISTRO BY ID
router.get('/:id/events', async (req, res) => {

    const id = req.params.id

    const user = await Events.findById(id)
    res.json({ error: false, user: user })


})

//CRIAR REGISTRO
router.post('/events', async (req, res) => {

    try {

        const body = req.body
        const response = await new Events(body).save();
        res.json({ error: false, filme: response })

    } catch (error) {

        res.json({ error: true, mesage: error.message })

    }




})

//ATUALIZAR REGISTRO BY ID
router.put('/:id', async (req, res) => {
    try {

        const id = req.params.id
        const body = req.body

        const user = await Events.findByIdAndUpdate(id, body)

        res.json({ error: false, user: user })
    } catch (error) {

        res.json({ error: true, mesage: error.message })

    }



})


//DELETAR REGISTRO BY ID
router.delete('/:id', (req, res) => {

    const id = req.params.id
    res.json({ mesage: `DELETAR REGISTRO BY ID ${id}` })


})

module.exports = router;