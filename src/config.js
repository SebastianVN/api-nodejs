require('dotenv').config();

module.exports = {
    app:{
        port:process.env.PORT || 4200,
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user:process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD ||'',
        database: process.env.MYSQL_DB || 'ejemplo'
    }
}