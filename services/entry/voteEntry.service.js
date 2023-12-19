const getPool = require('../../db/getPool');
const errors = require('../../helpers/errors.helper');

const main = async (vote,user,entry) => {

    try {
        const pool = await getPool();

        const sqlQuery = 'INSERT INTO entryvotes (value, userId, entryId) VALUES (?, ?, ?)';
        const values = [vote, user.id, entry.id];

        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al insertar nuevo voto', 'INSERT_ENTRYVOTE_ERROR');
        }

        return response.insertId; 
    } catch (error) {
        errors.internalServerError(error.message, 'DATA_INSER_ERROR');
    }

}

module.exports = main;