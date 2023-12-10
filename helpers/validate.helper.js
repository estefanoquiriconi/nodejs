const errors = require('../helpers/errors.helper');

const main = async (schema, body) =>{
    try {
        await schema.validateAsync(body);        
    } catch (error) {
        console.error(error)
        errors.schemaValidationError();
    }
}

module.exports = main;