const { Product } = require("../models");

const findProducts = async (req, res) => {
    const { name, price, stock } = req.body;
    const file = req.file

    // dapatkan extension filenya
    const split = file.originalname.split(".")
    const extension = split[split.length -1]

    // upload file ke imagekit
    const img = await ImageKit.uploud({
        file: file.buffer,
        filename: "IMG-${date.now()}.${extension"
    })
    try {
        const products = await Product.findAll(); // menggunakan 'Product' (bukan 'Products') untuk mengambil data dari model

        res.status(200).json({
            status: "Success",
            data: {
                products,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err.message, 
        });
    }
};

module.exports = {
    findProducts, 
};
