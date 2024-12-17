const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  localhost: process.env.DB_HOST,
  admin: process.env.DB_USER,
  152056: process.env.DB_PASSWORD,
  pecas_cadastradas: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});

module.exports = connection;
