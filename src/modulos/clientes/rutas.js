const express = require('express');

const respuestas = require('../../red/respuestas');
const router = express.Router();
const controlador = require('./controller');

router.get('/todos', SelectAll);
router.post('/:id', SelectOne);
router.delete('/eliminar/:id', DeleteData)
router.post('/', AddOne)

async function SelectAll(req, res, next) {
    try {
        const items = await controlador.SelectAll()
        respuestas.success(req, res, items, 200)
    } catch(err){
        next(err);
    }
};

async function SelectOne(req, res, next) {
    try {
        const item = await controlador.SelectOne(req.params.id)
        respuestas.success(req, res, item, 200)
    } catch(err) {
        next(err);
    }
};

async function DeleteData(req, res, next) {
    try {
        const item = await controlador.DeleteData(req.params.id)
        respuestas.success(req, res, 'Registro de cliente eliminado satisfactoriamente', 200)
    } catch(err) {
        next(err);
    }
};

async function AddOne(req, res, next) {
    try {
        const item = await controlador.AddOne(req.body)
        respuestas.success(req, res, "Se agrego el nuevo Cliente", 200)
    } catch (err) {
        next(err);
    }
};

module.exports = router;