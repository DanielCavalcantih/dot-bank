require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PASSWORD || "jato1234",
    "database": process.env.MYSQL_DB_NAME || "login",
    "host": process.env.MYSQL_HOST || "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
