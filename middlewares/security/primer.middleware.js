const main = (req, res, next) => {
    req.nombre = "Estefano";
    next();
}

module.exports = main;