const express = require("express");
const ProductRoutes = require("./src/product/routes")
const UsersRoutes = require("./src/users/routes")
const app = express();


app.use(express.json())

app.get("/",(req,res) => {
    res.send("Hello Word!!")
})


app.use("/api/products",ProductRoutes)


app.use("/api/users",UsersRoutes)

app.listen(process.env.PORT,() => console.log(`app on port ${process.env.PORT}`))