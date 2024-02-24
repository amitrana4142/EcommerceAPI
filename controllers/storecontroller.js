const db = require('../models')
const stores = db.stores

const addStore = async (req, res) => {
    try {
        await stores.create({
            name: req.body.name,
            address: req.body.address
        })
        return res.status(200).json({ message: "store added successfully" })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to process request" })
    }

}

const updateStore = async (req, res) => {
    try {
        const id = req.body.id
        const getStore = await stores.findOne({
            where: {
                id: id
            }
        })
        if (!getStore) {
            return res.status(200).json({ message: "store not found" })

        } else {
            getStore.name = (!req.body.name ? getStore.name : req.body.name)
            getStore.address = (!req.body.address ? getStore.address : req.body.address)
            await getStore.save()
            return res.status(200).json({ message: "store update successfully" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to process request" })
    }

}

const removeStore = async (req, res) => {
    try {
        const id = req.body.id
        const getStore = await stores.findOne({
            where: {
                id: id
            }
        })
        if (!getStore) {
            return res.status(200).json({ message: "store not found" })

        } else {
            await getStore.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200).json({ message: "store removed successfully" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to process request" })
    }

}

const storeList = async (req, res) => {
    try {
       
        return res.status(200).json({ Stores: await stores.findAll() })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to process request" })
    }

}

module.exports = {

    addStore,removeStore,updateStore,storeList
}