var mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');



const UserPayments = require('./src/models/userpayments')


const app = express()
app.use(bodyParser.json())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "payments"
});

// mongoose.connect('mongodb://localhost:27017/WS_SERVER');
// mongoose.connect('mongodb://localhost:27017/WS_SERVER', function (err) {
//     if (err) throw err;
//     console.log("MONGOOSE Connected ");

// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("MYSQL Connected!");
// });

const URI = `mongodb+srv://Tiago:Sky10611@nossacasaws.tyzmt.mongodb.net/dbnossacasa?retryWrites=true&w=majority`;

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM clientes", function (err, result, fields) {
        if (err) throw err;
        var data = []
        data = result
        console.log(data);

        console.log("INICIANDO CONEXAO MONGODB AGUARDE...")


        mongoose.connect(URI, async function (err) {
            if (err) {
                console.error(err)
                return;
            }

            for (let i = 1; i <= data.length; i++) {
                const response = await new UserPayments(data[i]).save();
                console.log(`SUCESS -> `, data[i].nome ? data[i].nome : "Nome não encontrado")

            }

            console.log("FIM...")

        });


    });
});