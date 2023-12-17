const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/editAvatar.schema");
const userService = require("../../services/user/index.service.js");
const fileService = require('../../services/files/index.service.js');

const main = async (req, res, next) => {
    try {
        //Validamos archivos
        await validateSchema (schema, req.files || {})

        //Almacenar nueva foto
        const fileName = await fileService.savePhoto(req.files.avatar, 150);


        //Actualizar base de datos
        try {
            await userService.updateAvatar(req.user, fileName);
        } catch (error) {
            await fileService.deleteFile(fileName);
            next(error);
        }
        
        
        //Eliminar foto vieja
        if(req.user.avatar){
            await fileService.deleteFile(req.user.avatar);
        }

        res.send({
            status: "success",
            message: "Avatar actualizado con éxito",
        })

    } catch (error) {
        next(error);
    }
}

module.exports = main;

