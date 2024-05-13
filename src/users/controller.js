const {sql} = require("@vercel/postgres")

const getAllUsers = async (req,res) => {
  try {
    const product =
    await sql`SELECT * FROM users;`;
    return product.rows
  } catch (error) {
    console.log(error);
  }
}

const getUserฺById = async (req,res) => {

}


const addUser = async (req,res) => {

}

const reMoveUser = async (req,res) => {

 }
module.exports = {
getAllUsers,getUserฺById,addUser,reMoveUser
}