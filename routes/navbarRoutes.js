
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('grills/home');
})

module.exports = router;