const mysql = require('mysql');
require('dotenv').config();

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.SERVER,
  database: process.env.DATABASE,
  port: process.env.PORT,
  connectionLimit: 10, 
};

const pool = mysql.createPool(config);

const adduser = async (newuser) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.query(`
      INSERT INTO users (UserName, Email, Name, PhoneNo, Password)
      VALUES (?, ?, ?, ?, ?)
    `, [newuser.UserName, newuser.Email, newuser.Name, newuser.PhoneNo, newuser.Password]);
    console.log(result);
    return result;
  } catch (error) {
    console.error('MySQL adduser error:', error.message);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

const getuser = async (userName) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.query('SELECT * FROM users WHERE UserName = ?', [userName]);
    console.log(result);
    return result;
  } catch (error) {
    console.error('MySQL getuser error:', error.message);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = {
  adduser,
  getuser,
};
