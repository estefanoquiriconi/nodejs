const userService = require('../../services/user/index.service');
const errors = require('../../helpers/errors.helper');

const main = async (req, res, next) => {

    try {

        const userId = req.user?.id || req.params.userId;
        const users = await userService.getById(userId);

        if(users.length === 0){
            errors.notFoundError('Usuario no encontrado', 'USER_NOT_FOUND');
        }

        req.user = users[0];

        next();
        
    } catch (error) {
        next(error);
    }

}

module.exports = main;