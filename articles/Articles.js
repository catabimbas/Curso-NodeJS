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

// (Ele vai formatar o banco toda vez que iniciar)  Articles.sync({force:true})

module.exports = Articles