const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// maybe not required in the latest version of express?
const morgan = require('morgan');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', require('./index.js'));

const PORT = 8772;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

//this is a clean page
//as add more pages, add add.use('/urlextension', require('filename.js');
// app pulls from index; index pulls from data  -- usually rename index if multiple /whatevers
