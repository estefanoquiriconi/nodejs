const jwt = require('jsonwebtoken');

const main = (tokenInfo) => {
    
    const { SECRET_KEY, EXPIRE_TOKEN} = process.env;

    const token = jwt.sign(tokenInfo, SECRET_KEY, {
        expiresIn: EXPIRE_TOKEN
    });

    return token;

}

module.exports = main;