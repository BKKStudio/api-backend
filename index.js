const express = require("express");
const ProductRoutes = require("./src/product/routes")
const UsersRoutes = require("./src/users/routes")
const app = express();
const port = 3000;

app.use(express.json())

app.get("/",(req,res) => {
    res.send("Hello Word!!")
})


app.use("/api/products",ProductRoutes)


app.use("/api/users",UsersRoutes)

app.listen(port,() => console.log(`app on port ${port}`))