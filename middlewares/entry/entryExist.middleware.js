const entryService = require('../../services/entry/index.service');
const errors = require('../../helpers/errors.helper');

const main = async (req, res, next) => {

    try {

        const entryId = req.entry?.id || req.params.entryId;
        const entries = await entryService.getById(entryId);

        if(entries.length === 0){
            errors.notFoundError('Entrada no encontrada', 'ENTRY_NOT_FOUND');
        }

        req.entry = entries[0];

        next();
        
    } catch (error) {
        next(error);
    }

}

module.exports = main;