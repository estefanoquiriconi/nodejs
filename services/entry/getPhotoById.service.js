const getPool = require("../../db/getPool");
const errors = require("../../helpers/errors.helper");

const main = async (photoId) => {
  try {
    const pool = await getPool();
    const sqlQuery = "SELECT * FROM entryphotos WHERE id = ?";
    const values = [photoId];
    const [photos] = await pool.query(sqlQuery, values);

    return photos;
  } catch (error) {
    errors.internalServerError(error.message, "DATA_CONSULT_ERROR");
  }
};

module.exports = main;
