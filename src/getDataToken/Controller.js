const jwt = require("jsonwebtoken");

const getDataFromToken = async (request,res) => {
    try {
        // Extract token from request cookies
        const token = request.cookies.get("token")?.value||''    

        // Verify token and extract data
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);


        const {rows} = await sql`SELECT * FROM allusers WHERE id = ${decoded.id};`;
        // Return the extracted data
        const user = rows

        if (!user) {
            return res.json({ error: "User not found" }, { status: 404 });
        }

        return res.json(user);
    } catch (error) {
        // Handle token verification errors
        throw new Error(error.message);
    }
};

module.exports = {
    getDataFromToken
}
  