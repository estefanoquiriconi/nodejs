const despedir = (req, res) =>{
    res.send(`Chau ${req.nombre} desde controller`);
}

module.exports = despedir;