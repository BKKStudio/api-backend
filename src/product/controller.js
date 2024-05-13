const {sql} = require("@vercel/postgres")

const getAllProduct = async (req,res) => {
  try {
    const product =
    await sql`SELECT * FROM "Product";`;
    return product.rows
  } catch (error) {
    console.log(error);
  }
}

const getUserฺById = async (req,res) => {
  const id = req.params.id
  try {
    const product =
    await sql`SELECT * FROM "Product" WHERE id = ${id};`;
    return product.rows
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
    getAllProduct,getUserฺById
}