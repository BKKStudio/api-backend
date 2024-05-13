const express = require("express");
const ProductRoutes = require("./src/product/routes")
const UsersRoutes = require("./src/users/routes")
const LoginRoutes = require("./src/login/route")
const app = express();

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
app.get("/",(req,res) => {
    res.send("Hello Word! Welcome To API WebSite By.6400502 Seksak Aranchot!")
})


app.use("/api/products",ProductRoutes)


app.use("/api/users",UsersRoutes)

app.use("/api/login", LoginRoutes)

app.listen(process.env.PORT,() => console.log(`app on port ${process.env.PORT}`))