const express = require("express");
const ProductRoutes = require("./src/product/routes")
const UsersRoutes = require("./src/users/routes")
const LoginRoutes = require("./src/login/route")
const GetData = require("./src/getDataToken/routes")
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser());

app.get("/",(req,res) => {
    res.send("Hello Word! Welcome To API WebSite By.6400502 Seksak Aranchot!")
})

app.use(cors({
    origin: 'https://websitedb.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));


app.use("/api/products",ProductRoutes)


app.use("/api/users",UsersRoutes)

app.use("/api/getDataToken",GetData)

app.use("/api/login", LoginRoutes)

app.get("/api/setcookie" , (req,res) => {
  res.setHeader('Set-Cookie' , 'token=true')
  res.send("set cookie success")
})

app.listen(process.env.PORT,() => console.log(`app on port ${process.env.PORT}`))