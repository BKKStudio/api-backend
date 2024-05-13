const { sql } = require("@vercel/postgres");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getlogin = async (req, res) => {
    try {
      const { username, password } = req.body;
      const { rows } = await sql`SELECT * FROM allusers WHERE username = ${username};`;
      const user = rows[0];
  
      if (!user || !(await bcryptjs.compare(password, user.password))) {
        return res.status(400).json({
          error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        });
      }
  
      // Create token data
      const tokenUser = {
        id: user.id,
        username: user.username,
        isadmin: user.isadmin,
      };
  
      // Create JWT token
      const token = jwt.sign(tokenUser, process.env.TOKEN_SECRET);
  
      // Set token as a cookie
      res.cookie("token", token, { httpOnly: true });
  
      return res.json({
        message: "เข้าสู่ระบบสำเร็จ",
        success: true,
      });
    } catch (error) {
      console.error(error);
      // Return error response
      return res.status(500).json({ error: "เกิดข้อผิดพลาดบางอย่าง" });
    }
  };
  
  module.exports = { getlogin };
  
