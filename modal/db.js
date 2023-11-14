const mysql = require('mysql');
const util = require('util');
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,          // Nome do host do banco de dados
  user: process.env.DATABASE_USER,          // Nome de usuário do banco de dados
  password: process.env.DATABASE_PASSWORD,  // Senha do banco de dados
  database: process.env.DATABASE_DB        // Nome do banco de dados
});

const db = {};

db.exec = async (sql, values) => {
  const query = util.promisify(pool.query).bind(pool);
  try {
    const rows = await query(sql, values);
    return rows;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = db;