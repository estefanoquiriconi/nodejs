const getPool = require("../../db/getPool");
const errors = require("../../helpers/errors.helper");

const main = async (registrationCode) => {
  try {
    const pool = await getPool();
    const sqlQuery = "SELECT * FROM users WHERE registrationCode = ?";
    const values = [registrationCode];
    const [users] = await pool.query(sqlQuery, values);

    return users;
    
  } catch (error) {
    errors.internalServerError(error.message, "DATA_CONSULT_ERROR");
  }
};

module.exports = main;
