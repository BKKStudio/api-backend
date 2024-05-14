const { sql } = require("@vercel/postgres");

const getAllProduct = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM products;`;
    return products.rows;
  } catch (error) {
    console.log(error);
  }
};

const getฺProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await sql`SELECT * FROM products WHERE id = ${id};`;
    return product.rows;
  } catch (error) {
    console.log(error);
  }
};

const AddProduct = async (req, res) => {
  try {
    const { img, title, detail, price } = req.body;
    await sql`
    INSERT INTO products (img, title, detail, price)
    VALUES (${img}, ${title}, ${detail}, ${price})
  `;
    return res.status(200).json({ message: "Add Product successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to Addproduct" });
  }
};

const editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { img, title, detail, price } = req.body;
    await sql`
    UPDATE products
    SET img = ${img}, title = ${title}, detail = ${detail}, price = ${price}
    WHERE id = ${id};
  `;
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to update product" });
  }
};

const removeProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await sql`
    DELETE FROM products
    WHERE id = ${id}
  `;
    return res.status(200).json({ message: "Product Delete successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to Delete product" });
  }
};
module.exports = {
  getAllProduct,
  getฺProductById,
  editProduct,
  AddProduct,
  removeProduct
};
