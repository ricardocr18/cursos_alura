const mysql = require ('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Linux@31',
    database: 'agenda-clinicapet-alura'
})

module.exports = conexao;