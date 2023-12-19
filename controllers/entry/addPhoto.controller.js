const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/entry/addPhoto.schema.js");
const entryService = require("../../services/entry/index.service.js");
const fileService = require("../../services/files/index.service.js");

const main = async (req, res, next) => {
  try {
    //Validamos schema
    await validateSchema(schema, req.files || {});

    //Almacenar nueva foto
    const fileName = await fileService.savePhoto(req.files.photo, 500);

    //Actualizar base de datos
    try {
      await entryService.addPhoto(req.entry, fileName);
    } catch (error) {
      await fileService.deleteFile(fileName);
      next(error);
    }

    res.send({
      status: "success",
      message: "Foto insertada con éxito",
      data: {
        photo: fileName
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = main;
