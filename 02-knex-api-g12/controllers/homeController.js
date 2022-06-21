// Los controladores tienen la lógica de negocios

const createHome = (req, res) => {
    //Aqui deberia crear mi Home
    res.send({ message: 'Home Creado (FAKE)'})
}

module.exports = {
    createHome
}