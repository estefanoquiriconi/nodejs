const getPool = require("../../db/getPool");
const errors = require("../../helpers/errors.helper");

const main = async (user) => {
  try {
    const pool = await getPool();
    const sqlQuery = "UPDATE users SET password = ? WHERE id = ?";
    const values = [user.password, user.id];
    const [response] = await pool.query(sqlQuery, values);

    if (response.affectedRows !== 1) {
      errors.conflictError(
        "Error al actualizar el password",
        "UPDATE_PASSWORD_ERROR"
      );
    }
  } catch (error) {
    errors.internalServerError(error.message, "DATA_UPDATE_ERROR");
  }
};

module.exports = main;
