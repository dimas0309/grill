
const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Menu = require('../models/menu');

router.get('/index', async(req, res) => {
    const categories = await Category.find();
    res.render('grills/index_menu', {categories})
})

router.get('/create', (req, res) => {
    res.render('grills/create_menu');
})

router.post('/index', async(req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.redirect('/menu/index');
} )

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const category = await Category.findById(id)
    const menu = await Menu.find({category:id});
                        
    res.render('grills/show_menu', {category, menu})
})

router.get('/:id/dish/create', async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.render('grills/create_dish', {category})
})

router.post('/:id/dish/index', async (req, res) => {
    const {id} = req.params;
    const category = await Category.findById(id);
    const {nameFood, priceFood, details} = req.body;
    const menu = new Menu(
        {category, nameFood, priceFood, details});
    category.dishes.push(menu);
    menu.category = category;
    await category.save();
    await menu.save();
    res.redirect(`/menu/${id}`);
})

module.exports = router;
