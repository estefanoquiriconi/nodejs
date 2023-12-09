const dotenv = require('dotenv');
const express = require('express');
const router = require('./routes/index.routes');

dotenv.config();
const {PORT} = process.env;
const app = express();

app.use(router);

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})