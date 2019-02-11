const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  database: "api"
})

module.exports = pool
