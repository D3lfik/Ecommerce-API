require('dotenv').config();
const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000 || process.env.PORT





// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


 // app.use('/products',require('./routes/products'));
app.use('/products', require('./routes/products'));
app.listen( port , function(err){
    if (err){
        console.log(`ERROR IN GETTING AN API : ${err}`);
    } 
    console.log(`API IS LIVE ON PORT : ${port}`);
});

