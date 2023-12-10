const errors = require('../helpers/errors.helper');

const main = async (schema, body) =>{
    try {
        await schema.validateAsync(body);        
    } catch (error) {
        console.error(error)
        errors.schemaValidationError(error.details[0]?.message);
    }
}

module.exports = main;