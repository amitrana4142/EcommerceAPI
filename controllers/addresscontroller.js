const db = require('../models')
const Address = db.addresses




const addAddress = async (req, res) => {

    try {
        await Address.create({
            state: req.body.state,
            city: req.body.city,
            pincode: req.body.pincode,
            house_no: req.body.house_no,
            road: req.body.road,
            address_type: req.body.type
        })
        return res.status(200).json({ message: 'address added successfully' })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Unable to process request' })

    }
}

const editAddress = async (req, res) => {

    try {
        const getAddress = await Address.findOne({
            where: { id: req.body.id }
        })
        if (!getAddress){
            
            return res.status(200).json({ message: 'address not found' })
        }else{
            getAddress.state=req.body.state
            getAddress.city=req.body.city
            getAddress.pincode=req.body.pincode
            getAddress.house_no=req.body.house_no
            getAddress.road=req.body.road
            getAddress.address_type=req.body.type
            
            await  getAddress.save()
            return res.status(200).json({ message: 'address updated successfully' })
            
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Unable to process request' })

    }
}
const removeAddress = async (req, res) => {

    try {
        const id=req.body.id 
        const getAddress = await Address.findOne({
            where: { id:id }
        })
        if (!getAddress){
            
            return res.status(200).json({ message: 'address not found' })
        }else{
            await Address.destroy({where:{id:id}})
            return res.status(200).json({ message: 'address removed successfully' })
            
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Unable to process request' })

    }
}

const addressList = async (req, res) => {

    try {
      
            return res.status(200).json({ addresses: await Address.findAll() })
            
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Unable to process request' })

    }
}

module.exports = {

    addAddress,
    editAddress,
    removeAddress,addressList
}