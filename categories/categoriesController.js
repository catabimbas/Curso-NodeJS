const express = require("express")
const router = express.Router()
const Category = require("./Category")
const slugfy = require("slugify")

router.get("/admin/categories/new",(req,res)=>{
    res.render('admin/categories/new')
})

router.post("/categories/save",(req,res)=>{
    var title = req.body.title
    if(title != undefined){
        Category.create({
            title:title,
            slug: slugfy(title) //Putaria Gráis -> putaria-gratis
        }).then(()=>{
            res.redirect("/")
        })
    }else{
        res.redirect("/admin/categories/new")
        console.log("Cadastro inválido")
    }
})

router.get("/admin/categories/", (req,res)=>{
    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories})
    })
})

module.exports = router