
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const { Schema } = mongoose;
const menus = require('./routes/menus');
const orders = require('./routes/orders');
const navbarRoutes = require('./routes/navbarRoutes');
 
mongoose.connect(
    'mongodb://localhost:27017/grilldb', { 
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.engine('ejs', ejsMate);

app.use('/', navbarRoutes);
app.use('/menu', menus);
app.use('/menu/order', orders);

app.listen(8081, () => {
    console.log('Serving on port 8081');
})