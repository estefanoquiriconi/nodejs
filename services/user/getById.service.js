const getPool = require("../../db/getPool");
const errors = require("../../helpers/errors.helper");

const main = async (userId) => {
  try {
    const pool = await getPool();
    const sqlQuery = "SELECT * FROM users WHERE id = ?";
    const values = [userId];
    const [users] = await pool.query(sqlQuery, values);

    return users;
  } catch (error) {
    errors.internalServerError(error.message, "DATA_CONSULT_ERROR");
  }
};

module.exports = main;
