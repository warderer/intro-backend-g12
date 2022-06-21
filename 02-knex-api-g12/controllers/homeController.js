// Los controladores tienen la lógica de negocios
const ModelHomes = require('../models/Homes');

const createHome = (req, res) => {
    //Aqui deberia crear mi Home
    //res.send({ message: 'Home Creado (FAKE)'})
    ModelHomes.create(req.body)
        .then((row) => {
            res.status(201).send(row);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
}

const findAllHomes = (req, res) => {
    ModelHomes.findAll()
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

const findOneHome = (req, res) => {
    ModelHomes.findOne(req.params.idHome)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

const updateOneHome = (req, res) => {

}

const destroyOneHome = (req, res) => {

}

const softDeleteOneHome = (req, res) => {

}

const findOneWithUser = (req, res) => {

}


module.exports = {
    createHome,
    findAllHomes,
    findOneHome,
    updateOneHome,
    destroyOneHome,
    softDeleteOneHome,
    findOneWithUser
}