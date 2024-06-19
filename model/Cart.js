const mongoose = require('mongoose');

// Create schema
const cartSchema = new mongoose.Schema({
    u_name: { type: String, required: true },
    p_id: { type: Number, required: true },
    p_name: { type: String, required: true },
    p_cost: { type: Number, required: true },
    qty: { type: Number, required: true },
    p_img: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
