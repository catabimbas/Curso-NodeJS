const Sequelize = require("sequelize")
const connection = require("../database/database")
const Category = require("../categories/Category")

const Articles = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

Category.hasMany(Articles) // Uma categoria tem muitos artigos
Articles.belongsTo(Category) //Um Artigo pertence a uma categoria

// Correção no bug
Articles.sync({force:false})

module.exports = Articles