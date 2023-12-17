const path = require('path');
const fs = require('fs');
const errors = require('../../helpers/errors.helper');


const main = async (fileName) => {
    try {
        const imgPath = path.join(process.cwd(), '..', process.env.UPLOADS_DIR, fileName);

        try {
            await fs.accessSync(imgPath);
        } catch (error) {
            return;
        }

        await fs.unlinkSync(imgPath);

    } catch (error) {
        errors.internalServerError(error.message, 'DELETE_FILE_ERROR');
    }
}

module.exports = main;