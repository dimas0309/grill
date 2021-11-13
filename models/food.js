
const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema ({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: 'true'
	},
	order: {
		type: Schema.Types.ObjectId,
		ref: 'Order'
	},
})

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;