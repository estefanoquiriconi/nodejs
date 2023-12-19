const getPool = require("../../db/getPool");
const errors = require("../../helpers/errors.helper");

const main = async (entryId) => {
  try {
    const pool = await getPool();
    const sqlQuery = "SELECT * FROM entries WHERE id = ?";
    const values = [entryId];
    const [entries] = await pool.query(sqlQuery, values);

    return entries;
  } catch (error) {
    errors.internalServerError(error.message, "DATA_CONSULT_ERROR");
  }
};

module.exports = main;
