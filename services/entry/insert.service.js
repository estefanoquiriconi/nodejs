const getPool = require('../../db/getPool');
const errors = require('../../helpers/errors.helper');

const main = async (title, place, description, userId) => {

    try {
        const pool = await getPool();

        const sqlQuery = 'INSERT INTO entries (title, place, description, userId) VALUES (?, ?, ?, ?)';
        const values = [title, place, description, userId];

        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al insertar nueva entrada', 'INSERT_ENTRY_ERROR');
        }

        return response.insertId; 
    } catch (error) {
        errors.internalServerError(error.message, 'DATA_INSER_ERROR');
    }

}

module.exports = main;