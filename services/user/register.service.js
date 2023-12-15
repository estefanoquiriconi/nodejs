const getPool = require('../../db/getPool');
const errors = require('../../helpers/errors.helper');

const main = async (email, username, password, registrationCode) => {

    try {
        const pool = await getPool();

        const sqlQuery = 'INSERT INTO users (username, password, email, registrationCode) VALUES (?, ?, ?, ?)';
        const values = [username, password, email, registrationCode];

        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al insertar un nuevo usuario', 'INSERT_USER_ERROR');
        }

        return response.insertId; 
    } catch (error) {
        errors.internalServerError(error.message, 'DATA_INSER_ERROR');
    }

}

module.exports = main;