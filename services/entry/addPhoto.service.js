const getPool = require('../../db/getPool');
const errors = require('../../helpers/errors.helper');

const main = async (entry, fileName) => {

    try {
        const pool = await getPool();

        const sqlQuery = 'INSERT INTO entryphotos (name, entryId) VALUES (?, ?)';
        const values = [fileName, entry.id];

        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al insertar nueva foto', 'INSERT_ENTRYPHOTOS_ERROR');
        }

        return response.insertId; 
    } catch (error) {
        errors.internalServerError(error.message, 'DATA_INSER_ERROR');
    }

}

module.exports = main;