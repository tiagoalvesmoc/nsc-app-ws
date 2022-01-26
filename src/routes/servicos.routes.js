const express = require('express')

const router = express.Router()
const Busboy = require('busboy')
const Servico = require('../models/servico')
const Arquivos = require('../models/arquivos')




// router.post('/', async (req, res) => {

//     var busboy = new Busboy({ headers: req.headers })
//     busboy.on('finish', async () => {


//         try {


//             let erros = []
//             let arquivos = []
//             let files = []

//             if (req.files && Object.keys(req.files).lenght > 0) {

//                 for (let key of Object.keys(req.files)) {


//                     const file = req.files[key]
//                     const nameParts = file.name.split('.')
//                     const fileName = `${new Date().getTime()}.${nameParts[nameParts.lenght - 1]}`


//                     const path = `servico/${req.body.salaoId}/${fileName}`
//                     files.push(path)

//                     // Upload to firebase
//                     console.log('FILE ->', file)
//                     console.log('FILENAME ->', fileName)



//                 }
//                 res.json({ error: false, message: `Upload Sucessfull - ${files}` })
//             }
//             // const response = await new Servicos(req.body).save()
//             // res.json({ error: false, message: response })

//         } catch (error) {
//             res.json({ error: true, message: error.message })

//         }

//     })
//     req.pipe(busboy)



// })



router.post('/:id', async (req, res) => {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('finish', async () => {
        try {
            let errors = [];
            let arquivos = [];

            if (req.files && Object.keys(req.files).length > 0) {
                for (let key of Object.keys(req.files)) {
                    const file = req.files[key];

                    const nameParts = file.name.split('.');
                    const fileName = `${new Date().getTime()}.${nameParts[nameParts.length - 1]
                        }`;
                    const path = `servicos/${req.body.salaoId}/${fileName}`;

                    const response = []

                    // const response = await aws.uploadToS3(
                    //     file,
                    //     path
                    //     //, acl = https://docs.aws.amazon.com/pt_br/AmazonS3/latest/dev/acl-overview.html
                    // );

                    if (response.error) {
                        errors.push({ error: true, message: response.message.message });
                    } else {
                        arquivos.push(path);
                    }

                }
            }

            if (errors.length > 0) {
                res.json(errors[0]);
                return false;
            }

            // CRIAR SERVIÇO
            let jsonServico = JSON.parse(req.body.servico);
            jsonServico.salaoId = req.body.salaoId;
            const servico = await new Servico(jsonServico).save();
            console.warn('SERVICOS OK -', servico)

            // CRIAR ARQUIVO
            arquivos = arquivos.map((arquivo) => ({
                referenciaId: servico._id,
                model: 'Servico',
                arquivo,
            }));
            await Arquivos.insertMany(arquivos);

            console.warn('ARQUIVOS OK -', servico)

            res.json({ error: false, message: "AQUI" });
        } catch (err) {
            res.json({ error: true, message: err.message });
        }
    });
    req.pipe(busboy);
});


router.put('/', async (req, res) => {


    try {

        res.json({ error: false })

    } catch (error) {

        res.json({ error })

    }

})



module.exports = router;