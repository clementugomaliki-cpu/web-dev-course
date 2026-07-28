const checkout = async (req, res) => {
    try {
        const { shippingAddress, paymentMethod } = req.body;
        const cart = await Cart.findOne({buyer: req.user._id}).populate("items.product");
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({success: false, message: "Cart is empty."});
        }

        let totalPrice = 0;
        const orderItems = [];
        for (const item of cart.items) {
            const product = await Product.findById(item.product._id);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: `${item.product.name} not found.`
                });
            }
            if (product.stock < item.quantity) {
                return res.status(400).json({success: false,
                    message: `${product.name} has only ${product.stock} item(s) left.`
                });
            }

            totalPrice += product.price * item.quantity;
            orderItems.push({
                product: product._id,
                quantity: item.quantity,
                price: product.price
            });
         
            product.stock -= item.quantity;
            await product.save();
        }
        const order = await Order.create({
            buyer: req.user._id,
            products: orderItems,
            totalPrice,
            shippingAddress,
            paymentMethod
        });

        cart.items = [];
        await cart.save();
        res.status(201).json({success: true, message: "Order placed successfully.",
            order});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({buyer: req.user._id})
        .populate("products.product")
        .sort({ createdAt: -1 });
        res.status(200).json({success: true, count: orders.length, orders});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            buyer: req.user._id}).populate("products.product");
        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }
        res.status(200).json({success: true, order});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            buyer: req.user._id
        });
        if (!order) {
            return res.status(404).json({success: false, message: "Order not found."});
        }
        if (order.status !== "Pending") {
            return res.status(400).json({success: false, 
                message: "Only pending orders can be cancelled."});
        }
        for (const item of order.products) {
            const product = await Product.findById(item.product);
            if (product) {product.stock += item.quantity;

                await product.save();
            }
        }
        order.status = "Cancelled";
        await order.save();
        res.status(200).json({
            success: true,
            message: "Order cancelled successfully.",
            order
        });

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = {checkout, getOrders, getSingleOrder, cancelOrder};