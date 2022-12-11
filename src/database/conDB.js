const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: process.env.LIMIT,
    host: process.env.HOST,
    port:process.env.PORT,
    user:process.env.USER,
    password:process.env.PW,
    database: process.env.DATABASE,
})

module.exports = pool;