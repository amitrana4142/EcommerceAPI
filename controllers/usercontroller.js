
const db = require('../models')
const{Op}= require('sequelize')
const User = db.users


const userList = async (req, res) => {
    try {
        
            return res.status(200).json({ Users: await User.findAll() })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Unable to process request' })
        
        
    }
}


const userSignUp = async (req, res) => {
    try {
        const getUser = await User.findAll({ where: { email: req.body.email } })
        if (getUser.length == 0) {
            await User.create({
                username: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            return res.status(200).json({ message: 'User register successfully' })
        } else {

            return res.status(200).json({ message: 'The user already exist please try to log in' })
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Unable to process request' })
        
        
    }
}

const userSignIn= async(req,res)=>{
    
    try {
        const getUser= await User.findOne({where:{

            [Op.and]:{email:req.body.email,password:req.body.password}
        }})
        if (!getUser){
        //   return res.render('login', { error: 'Incorrect password. Please try again.' });

        return res.status(200).json({ message: 'Please enter valid details' })
        }
      //return  res.render('welcome',{getUser})
        return res.status(200).json({ message: 'Loged in successfully' })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Unable to process request' })
    }
    
}
const userUpdate = async (req,res)=>{
    try {
        const getUser= await User.findOne({where:{
            email: req.body.email
        }})
        if (!getUser){
            
            return res.status(200).json({ message: 'User not found' })
        }else{
            getUser.password = req.body.password
            getUser.username = req.body.name
            getUser.save() 
            
            return res.status(200).json({ message: 'User details updated successfully' })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Unable to process request' })
        
    }
}

module.exports = {
    userSignUp,
    userSignIn,userUpdate,userList
}