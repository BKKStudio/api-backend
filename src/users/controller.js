const {sql} = require("@vercel/postgres")
const bcryptjs = require("bcryptjs")

const getAllUsers = async (req,res) => {
  try {
    const users =
    await sql`SELECT * FROM allusers;`;
    return users.rows
  } catch (error) {
    console.log(error);
  }
}

const getUserฺById = async (req,res) => {
  const id = req.params.id
  try {
    const user =
    await sql`SELECT * FROM allusers WHERE id = ${id};`;
    return user.rows
  } catch (error) {
    console.log(error);
  }
}


const addUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, username, password, img } = req.body;

    // Check if user already exists
    const existingUsers = await sql`SELECT * FROM allusers WHERE username = ${username};`;

    if (existingUsers.length > 0) {
      return res.status(400).send("มีชื่อผู้ใช้นี้หรือรหัสผ่านนี้อยู่แล่วอยู่แล้วกรุณาใช้ชื่ออื่น");
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Insert user into the database
    const newIser = await sql`INSERT INTO  allusers (name, username, password, img, isadmin) VALUES (${name}, ${username}, ${hashedPassword}, ${img});`;

    return res.status(200).send("สมัครสมาชิกเรียบร้อย กรุุณาเข้าสู่ระบบ");
  } catch (error) {
    console.error(error);
    return res.status(500).send("พบข้อผิดพลาดในการสร้างบัญชีผู้ใช้");
  }
}

const reMoveUser = async (req,res) => {
  const id = req.params.id
  try {
    const user = await sql`DELETE FROM allusers WHERE id = ${id};`
 return res.send("Deleted Success").status(200)
  } catch (error) {
    console.log(error);
  }
 }
 
module.exports = {
getAllUsers,getUserฺById,addUser,reMoveUser
}