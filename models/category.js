const mongoose = require('mongoose');
const { Schema } = mongoose;

categorySchema = new Schema ({
	category: {
		type: String,
		required: true
	},
	dishes: [{
		type: Schema.Types.ObjectId,
		ref: 'Menu'
	}]
})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;