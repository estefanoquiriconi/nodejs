const getPool = require("../../db/getPool");
const errors = require("../../helpers/errors.helper");

const main = async (user, recoverPassCode) => {
  try {
    const pool = await getPool();
    const sqlQuery = "UPDATE users SET recoverPassCode = ? WHERE id = ?";
    const values = [recoverPassCode, user.id];
    const [response] = await pool.query(sqlQuery, values);

    if (response.affectedRows !== 1) {
      errors.conflictError(
        "Error al actualizar el recoverPassCode",
        "UPDATE_RECOVER_PASS_CODE_ERROR"
      );
    }
  } catch (error) {
    errors.internalServerError(error.message, "DATA_UPDATE_ERROR");
  }
};

module.exports = main;
