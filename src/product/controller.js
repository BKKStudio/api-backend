const {sql} = require("@vercel/postgres")
const bcryptjs = require("bcryptjs")

const getAllProduct = async (req,res) => {
  try {
    const product =
    await sql`SELECT * FROM Product;`;
    return product.rows
  } catch (error) {
    console.log(error);
  }
}

const getUserฺById = async (req,res) => {
  const id = req.params.id
  try {
    const user =
    await sql`SELECT * FROM Product WHERE id = ${id};`;
    return user.rows
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
    getAllProduct,getUserฺById
}