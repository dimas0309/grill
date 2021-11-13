
const mongoose = require('mongoose');
const { Schema } = mongoose;

const purchaseSchema = new Schema ({
	pricePurchase: {
		type: Number,
		required: true
	},
	lastActiveAt: {
		type: Date,
		required: true
	},
	customer: {
		type: Schema.Types.ObjectId,
		ref: 'Customer'
	},
	order: [{
		type: Schema.Types.ObjectId,
		ref: 'Order'
	}],
})

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;