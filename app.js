<<<<<<< HEAD
const express= require('express')
const app= express();
const dotenv= require('dotenv');
const bodyParser = require('body-parser');
const routers= require('./router/routers.js')
const fileupload = require('express-fileupload')
const PORT = process.env.PORT
dotenv.config();
require('http').createServer(app)

// const path = require('path');

// console.log(__dirname)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(fileupload())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// user routers
app.use('/user',routers)
// address routers
app.use('/address',routers)
// product routers
app.use('/product',routers)
// store routers
app.use('/store',routers)
// category routers
app.use('/category',routers)

// app.get('/sign-in', (req, res) => {
//     res.render('login');
// });

app.listen(PORT,()=>{
    console.log('application is running on :', PORT)
})

=======
const express= require('express')
const app= express();
const dotenv= require('dotenv');
const bodyParser = require('body-parser');
const routers= require('./router/routers.js')
const fileupload = require('express-fileupload')
const PORT = process.env.PORT
dotenv.config();
require('http').createServer(app)

// const path = require('path');

// console.log(__dirname)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(fileupload())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// user routers
app.use('/user',routers)
// address routers
app.use('/address',routers)
// product routers
app.use('/product',routers)
// store routers
app.use('/store',routers)
// category routers
app.use('/category',routers)

// app.get('/sign-in', (req, res) => {
//     res.render('login');
// });

app.listen(PORT,()=>{
    console.log('application is running on :', PORT)
})

>>>>>>> e40d90e41af28d1659d79ff8df1d76a41a5416ab
module.exports=app