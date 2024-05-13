const {sql} = require("@vercel/postgres")
const bcryptjs = require("bcrypt")

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
  const id = req.params.id
  try {
    const user =
    await sql`SELECT * FROM users WHERE id = ${id};`;
    return user.rows
  } catch (error) {
    console.log(error);
  }
}


const addUser = async (req,res) => {
  try {
    const { name, username, password,img } = await req.body;

    //check if user already exists
    const user = await sql`SELECT * FROM users WHERE username = ${username};`
    
    if (user) {
      return res.send("มีชื่อผู้ใช้นี้หรือรหัสผ่านนี้อยู่แล่วอยู่แล้วกรุณาใช้ชื่ออื่น").status(400);
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

   await sql`INSERT INTO users (name,username,password,img) VALUES (${name},${username},${hashedPassword},${img});`
    return res.send("สมัครสมาชิกเรียบร้อย กรุุณาเข้าสู่ระบบ").status(200)
  } catch (error) {
    return res.send(error);
  }
}

const reMoveUser = async (req,res) => {

 }
module.exports = {
getAllUsers,getUserฺById,addUser,reMoveUser
}