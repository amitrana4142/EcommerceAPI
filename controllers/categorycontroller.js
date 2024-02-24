<<<<<<< HEAD
const db= require('../models')
const Category=db.categories

const addCategory =async (req,res)=>{
    try{

        await Category.create({
            name: req.body.name
        })
        return res.status(200).json({message:'Category added successfully'})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'Unable to process request'})
        
    }
}

const categoriesList =async (req,res)=>{
    try{
        return res.status(200).json({categories:await Category.findAll()})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'Unable to process request'})

    }
}

module.exports ={
    addCategory,categoriesList
}
=======
const db= require('../models')
const Category=db.categories

const addCategory =async (req,res)=>{
    try{

        await Category.create({
            name: req.body.name
        })
        return res.status(200).json({message:'Category added successfully'})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'Unable to process request'})
        
    }
}

const categoriesList =async (req,res)=>{
    try{
        return res.status(200).json({categories:await Category.findAll()})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:'Unable to process request'})

    }
}

module.exports ={
    addCategory,categoriesList
}
>>>>>>> e40d90e41af28d1659d79ff8df1d76a41a5416ab
