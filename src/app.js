const express = require('express');
const morgan =require('morgan')
const config = require('./config');

const app = express();
const  clientes = require('./modulos/clientes/rutas.js')
const error = require('./red/errors')


//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Confguracion puerto
app.set('port', config.app.port);


//Rutas de api
app.use('/api/clientes', clientes)
app.use(error);

module.exports = app;