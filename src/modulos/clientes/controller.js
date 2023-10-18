const db = require('../../DB/mysql')
const TABLA = 'clientes';

function SelectAll() {
    return db.SelectAll(TABLA);
}
function SelectOne(id) {
    return db.SelectOne(TABLA, id);
}

function DeleteData(id) {
    return db.DeleteData(TABLA, id);
}

function AddOne(body) {
    return db.AddOne(TABLA, body);
}

module.exports = {
    SelectAll,
    SelectOne,
    DeleteData,
    AddOne
}