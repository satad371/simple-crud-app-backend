const express = require('express')
const mongoose = require('mongoose');
const Product = require("./product.model.js");
const productRoute=require("./product.route.js");
const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// routes
app.use("/api/products",productRoute);
app.get('/',(req,res)=>{res.send("Hello from node api server updated ");});
mongoose.connect('mongodb+srv://satadru371:A7643G8EFeYMrs31@backenddb.getaiqq.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{      
        console.log("Connected to database");
        app.listen(3000,()=>{console.log('Server is running on port 3000'); });
    })
    .catch(() =>{
    
        console.log("Connection failed");
    
});
