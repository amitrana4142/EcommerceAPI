const db = require('../models')
const helper = require('../config/helper')
const products = db.products

const addProduct = async (req,res) => {
    try {
        await products.create({
            product_image: (!req.files?'No image':helper.productImage(req.files.products_image)),
            name: req.body.name,
            THC: req.body.THC,
            CBD: req.body.CBD,
            description: req.body.description,
            price: req.body.price

        })
        return res.status(200).json({ message: "product details saved successfully" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "unable to process request" })
    }
}

const updateProduct = async (req, res) => {
    // console.log(req);
    try {
        // helper.getImage(req)
        const getProduct = await products.findOne({ where: { id: req.body.id } })
        if (!getProduct) {
            return res.status(200).json({ message: "product not found" })

        } else {
            getProduct.product_image= (!req.files? getProduct.product_image:helper.productImage(req.files.products_image)),
            getProduct.name = (!req.body.name ? getProduct.name : req.body.name)
            getProduct.price = (!req.body.price ? getProduct.price : req.body.price)
            getProduct.THC = (!req.body.THC ? getProduct.THC : req.body.THC)
            getProduct.CBD = (!req.body.CBD ? getProduct.CBD : req.body.CBD)
            getProduct.description = (!req.body.description ? getProduct.description : req.body.description)
            await getProduct.save();
            return res.status(200).json({ message: "product update successfully" })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "unable to process request" })
    }
}
const removeProduct = async (req, res) => {
    // console.log(req);
    try {
        const id = req.body.id
        // helper.getImage(req)
        const getProduct = await products.findOne({ where: { id: id } })
        if (!getProduct) {
            return res.status(200).json({ message: "product not found" })

        } else {
            await products.destroy({ where: { id: id } })
            return res.status(200).json({ message: "product removed successfully" })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "unable to process request" })
    }
}

const productList = async (req, res) => {
    try {
        return res.status(200).json({ Products: await products.findAll() })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "unable to process request" })
    }
}

module.exports = {
    // addProduct, 
    updateProduct, removeProduct, productList,

    addProduct
}