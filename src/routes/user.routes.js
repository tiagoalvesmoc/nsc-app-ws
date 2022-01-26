const express = require('express')

const router = express.Router()
const User = require('../models/user')





router.get('/', async (req, res) => {

    // const user = await new User.(req.body).save()

    try {
        const user = await User.find({})

        res.json({ error: false, all_users: user })
    }
    catch (error) {
        res.json({ error: true, message: error })

    }


})

router.post('/add', async (req, res) => {

    // const user = await new User.(req.body).save()

    try {
        // const user = await User.find({})
        const { cliente } = req.body;

        const user = await new User(req.body).save()

        res.json({ error: false, message: user })
        console.log(user)
    }
    catch (error) {
        console.log(error)
        console.log(req.body)
        res.json({ error: true, message: error })

    }


})

router.post('/filter', async (req, res) => {
    try {
        const clientes = await User.find(req.body.filters);
        res.json({ error: false, clientes });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const clientes = await User.findOne(req.body.filters);
        if (clientes == null) {
            res.json({ error: true, message: 'User not Found' });
        } else {
            res.json({ error: false, clientes });
        }

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

router.post('/remove', async (req, res) => {

    try {



        // console.log(req.body)

        const { cliente } = req.body

        console.log(cliente)


        const clientes = await User.findByIdAndDelete({
            _id: cliente._id
        })
        res.json({ error: false, message: clientes });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});




module.exports = router;