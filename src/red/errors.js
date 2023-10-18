const respuesta = require('./respuestas')

function errores (err, req, res, next){
    console.log('Error es el siguiente',err);

    const message = err.message || 'Error interno '
    const status = err.statusCode || 500

    respuesta.error(req,res,message,status);

}

module.exports = errores;