const {sql} = require("@vercel/postgres")

const getAllProduct = async (req,res) => {
  try {
    const products =
    await sql`SELECT * FROM products;`;
    return products.rows
  } catch (error) {
    console.log(error);
  }
}

const getฺProductById = async (req,res) => {
  const id = req.params.id
  try {
    const product =
    await sql`SELECT * FROM products WHERE id = ${id};`;
    return product.rows
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
    getAllProduct,getฺProductById
}