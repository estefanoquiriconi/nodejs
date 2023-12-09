const dotenv = require('dotenv');
const express = require('express');
const router = require('./routes/index.routes');

dotenv.config();
const {HTTP_PORT} = process.env;
const app = express();

app.use(router);

app.listen(HTTP_PORT, ()=>{
    console.log('http://localhost:' + HTTP_PORT);
})