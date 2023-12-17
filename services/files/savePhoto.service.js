const path = require('path');
const fs = require('fs');
const randomstring = require('randomstring');
const sharp = require('sharp');
const errors = require('../../helpers/errors.helper');


const main = async (imagen, ancho)=>{
    try {
        const uploadDir = path.join(process.cwd(), '..', process.env.UPLOADS_DIR);
        
        try {
            await fs.accessSync(uploadDir);         
        } catch {
            await fs.mkdirSync(uploadDir);
        }

        const imgSharp = sharp(imagen.data);
        imgSharp.resize(ancho);
        const nameRandom = randomstring.generate(15) + '.jpg';
        const imgPath = path.join(uploadDir, nameRandom);

        await imgSharp.toFile(imgPath)
        return nameRandom;

    } catch (error) {
        errors.internalServerError(error.message, 'SAVE_PHOTO_ERROR');
    }
}

module.exports = main;