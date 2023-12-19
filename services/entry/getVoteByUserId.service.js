const getPool = require("../../db/getPool");
const errors = require("../../helpers/errors.helper");

const main = async (userId) => {
  try {
    const pool = await getPool();
    const sqlQuery = "SELECT *  FROM entryvotes WHERE userId = ?";
    const values = [userId];
    const [response] = await pool.query(sqlQuery, values);


    return response;
    
  } catch (error) {
    errors.internalServerError(error.message, "DATA_CONSULT_ERROR");
  }
};

module.exports = main;
