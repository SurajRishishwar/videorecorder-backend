const express = require("express");
const bodyParser = require('body-parser');
const cors= require('cors');
const cookieParser=require('cookie-parser');
const db=require('./config/db');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded());
app.use(cookieParser());





app.post('/signin',require('./routes/auth'));

app.post('/',require('./routes/user'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});