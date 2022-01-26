const mongoose = require('mongoose');

const url = require('./nodemon.json')


const URI = 'mongodb+srv://Tiago:Sky10611@nossacasaws.tyzmt.mongodb.net/dbnossacasa?retryWrites=true&w=majority'






const env = process.env.NODE_ENV || 'dev';
let options = {};

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI, options)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log(err));




// const URI = '';

// const env = process.env.NODE_ENV || 'dev';
// let options = {};

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// mongoose
//   .connect(URI, options)
//   .then(() => console.log('DB is Up!'))
//   .catch((err) => console.log(err));
