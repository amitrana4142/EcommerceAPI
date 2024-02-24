const express= require('express')
const router= express.Router()
const usercontroller= require('../controllers/usercontroller.js')
const addresscontroller= require('../controllers/addresscontroller.js')
const productcontroller= require('../controllers/productcontroller.js')
const storecontroller= require('../controllers/storecontroller.js') 
const categoryontroller= require('../controllers/categorycontroller.js') 

router.get('/sign-in', (req, res) => {
    res.render('login',{error:null}); // Render the HTML form
  });

//user routes
router.post('/sign-up',usercontroller.userSignUp)
router.post('/sign-in',usercontroller.userSignIn)
router.post('/update',usercontroller.userUpdate)
router.get('/user-list',usercontroller.userList)

//address routes
router.post('/add-address',addresscontroller.addAddress)
router.post('/edit-address',addresscontroller.editAddress)
router.post('/remove-address',addresscontroller.removeAddress)
router.get('/address-List',addresscontroller.addressList)


//product routes
router.post('/add-product',productcontroller.addProduct)
router.post('/update-product',productcontroller.updateProduct)
router.post('/remove-product',productcontroller.removeProduct)
router.get('/product-list',productcontroller.productList)

// store routes
router.post('/add-store',storecontroller.addStore)
router.post('/update-store',storecontroller.updateStore)
router.post('/remove-store',storecontroller.removeStore)
router.get('/store-list',storecontroller.storeList)


// category routes
router.post('/add-category',categoryontroller.addCategory)
router.get('/category-list',categoryontroller.categoriesList)


module.exports= router