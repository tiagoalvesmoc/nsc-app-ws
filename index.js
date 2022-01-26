const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
require('./database')
const app = express();


require('dotenv').config()

app.use(morgan('dev'));
app.use(express.json());
app.use(busboy());
app.use(busboyBodyParser());
app.use(cors())



app.use('/usuarios', require('./src/routes/user.routes'))
app.use('/salao', require('./src/routes/salao.routes'))
app.use('/servico', require('./src/routes/servicos.routes'))
app.use('/lidercelulas', require('./src/routes/lider.routes'))
app.use('/agendamento', require('./src/routes/agendamento.routes'))



app.set('port', 8000);


// mongoose.connect('mongodb://localhost:27017/WS_SERVER', function (err) {
//     if (err) throw err;
//     console.log("MONGOOSE Connected ");
// });

// app.listen(8000, () => {

//     console.log("WS Rodando")

// })


// app.listen(app.get('port'), function () {
//     console.log('WS escutando porta ' + app.get('port'));
// });

app.listen(process.env.PORT || 8000, () => {

    console.log('WS is Up')

})



