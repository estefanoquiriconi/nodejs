const saludar = (req, res) =>{
    res.send(`Hola ${req.nombre} desde controller`);
}

module.exports = saludar;