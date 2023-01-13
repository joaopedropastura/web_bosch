const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('LOGIN_WEB_SITE', 'JOAOPEDRO', 'etsds10243110',
{
dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();
module.exports = database;