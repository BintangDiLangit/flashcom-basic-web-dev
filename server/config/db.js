const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',  // root atau toor atau '' (kosongan)
    database: 'javascript_products'
})

db.connect((err) => {
    if (err) {
        console.log('Error connection to Mysql', err);
        return
    }
    console.log('Connected to MySql');
})

module.exports = db;