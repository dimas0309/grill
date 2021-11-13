
const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema ({
	foods: [String],
	prices: [String],
	quantities: [String],
	netPrices: [String],
	total: {
		type: String
	},
	lastActiveAt: {
		type: Date,
	},
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;