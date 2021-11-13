
const mongoose = require('mongoose');
const { Schema } = mongoose;

menuSchema = new Schema ({
	nameFood: {
		type: String,
		required: true
	},
	details: {
		type: String
	},
	priceFood: {
		type: Number,
		required: true
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	}
})

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;