const { sql } = require("@vercel/postgres");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const getlogin = async (req, res) => {
  try {
    const { username, password } = req.body; // ไม่ต้องใช้ await ที่นี่
    const { rows } =
      await sql`SELECT * FROM allusers WHERE username = ${username};`;
    const user = rows[0]; // ปรับให้เป็น rows[0] เพราะว่า rows เป็น array

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
    const token = jwt.sign(tokenUser, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token",token,{httpOnly:true})
    res.status(200)
  } catch (error) {
    console.error(error);
    // Return error response
    return res.status(500).json({ error: "เกิดข้อผิดพลาดบางอย่าง" });
  }
};

module.exports = {
  getlogin,
};
