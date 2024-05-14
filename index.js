const express = require("express");
const ProductRoutes = require("./src/product/routes")
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser());

app.get("/",(req,res) => {
    res.send("Hello Word! Welcome To API WebSite By.6400502 Seksak Aranchot  (get:/api/products) (get:/api/products/id)")
    
})

app.use(cors({
    origin:[ 'https://websitedb.vercel.app', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));


app.use("/api/products",ProductRoutes)



app.listen(process.env.PORT,() => console.log(`app on port ${process.env.PORT}`))