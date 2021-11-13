
const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');
const Order = require('../models/order')
const currDate = new Date();



router.get('/index', async (req, res) => { 
    const menus = await Menu.find();
     
    res.render('grills/index_order', {menus})
})

router.post('/index', async (req, res) => {

    const { food, total, prilist } = req.body;
    const { quanlist, amount } = req.body;
    const lastActiveAt = currDate;
    const foods = food.split(",");
    const prices = prilist.split(",");
    const quantities = quanlist.split(",");
    const netPrices = amount.split(",");
    const order = new Order({
        foods, prices, quantities, netPrices, total,
        lastActiveAt
    });

    order.save();

    res.send(order);
})

module.exports = router;