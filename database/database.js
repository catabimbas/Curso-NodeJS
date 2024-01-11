const Sequelize = require('sequelize')


const connection = new Sequelize('guiaPerguntas', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection