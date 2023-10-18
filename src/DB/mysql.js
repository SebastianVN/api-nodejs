const mysql = require('mysql');
const confi = require('../config');
const { error } = require('console');

const dbconfig = {
    host: confi.mysql.host,
    user: confi.mysql.user,
    password: confi.mysql.password,
    database: confi.mysql.database,
}

let connection;

function conectMysql() {
    connection = mysql.createConnection(dbconfig);
    connection.connect((error) => {
        if (error) {
            console.log('Conexion con DB errada', error);
            setTimeout(conectMysql, 200)
        } else {
            console.log('Base de datos conectada...')
        }
    });
    connection.on('error', error => {
        console.log('Erro en la base de datos', error)
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conectMysql();
        } else {
            throw error
        }
    })
}
conectMysql();
function SelectAll(tabla) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);;

        })
    });
}

function SelectOne(tabla, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);;
        })
    });
}

function DeleteData(tabla, id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${tabla} WHERE id= ${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);;
        })
    });
}
function insertar(tabla, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result);;
        })
    });
}
function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${tabla} SET WHERE id= ?`, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);;
        })
    });
}

function AddOne(tabla, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result);;
        })
    });
}

module.exports = {
    SelectAll,
    SelectOne,
    DeleteData,
    AddOne,
}