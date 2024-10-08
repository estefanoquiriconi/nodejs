const dotenv = require('dotenv');
const express = require('express');
const router = require('./routes/index.routes');
const errorController = require('./controllers/error/index.controller');
const fileUpload = require('express-fileupload');

dotenv.config();
const {HTTP_PORT} = process.env;
const app = express();


app.use(express.json());
app.use(express.static(process.env.UPLOADS_DIR));
app.use(fileUpload());
app.use(router);
app.use(errorController);

app.listen(HTTP_PORT, ()=>{
    console.log('http://localhost:' + HTTP_PORT);
})