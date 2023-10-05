const { Product } = require("../models");

const findProducts = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const products = await Product.findAll(); // Menggunakan 'Product' (bukan 'Products') untuk mengambil data dari model

        res.status(200).json({
            status: "Success",
            data: {
                products,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err.message, // Menambahkan koma setelah "Failed"
        });
    }
};

module.exports = {
    findProducts, // Menggunakan 'findProducts' (bukan 'createProduct')
};
