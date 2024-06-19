const Cart = require('../model/Cart');

// Fetch all cart items
const fetchAllCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Insert a new cart item
const insertCartItem = async (req, res) => {
    const { u_name, p_id,p_name, p_img, p_cost, qty } = req.body;

    const cartItem = new Cart({
        u_name,
        p_id,
        p_name,
        p_img,
        p_cost,
        qty
    });

    try {
        const newCartItem = await cartItem.save();
        res.status(201).json(newCartItem);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

// Update quantity of an existing cart item
const updateCartItem = async (req, res) => {
    const { u_name, p_id } = req.params;
    const { qty } = req.body;

    try {
        const updatedCartItem = await Cart.findOneAndUpdate(
            { u_name: u_name, p_id: p_id },
            { qty: qty },
            { new: true }
        );

        if (!updatedCartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.json(updatedCartItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a cart item
const deleteCartItem = async (req, res) => {
    const { u_name, p_id } = req.params;

    try {
        const deletedCartItem = await Cart.findOneAndDelete({ u_name: u_name, p_id: p_id });

        if (!deletedCartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.json({ message: 'Cart item deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    fetchAllCartItems,
    insertCartItem,
    updateCartItem,
    deleteCartItem
};