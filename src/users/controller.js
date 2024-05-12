const Prisma = require('@prisma/client')

const prisma = new Prisma.PrismaClient();


const getAllUsers = async (req,res) => {
  await prisma.$connect();
    const user = await prisma.user.findMany({})
    return user
}

const getUserฺById = async (req,res) => {
  await prisma.$connect();
    const id = req.params.id;
    const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      })
    return user
}


const addUser = async (req,res) => {
  await prisma.$connect();
 const { name, username, password,img } = await  req.body;

 const newUser = await prisma.user.create({
  data: {
    img,
    name,
    username,
    password,
  },
});
return res.send("สมัครสมาชิกเรียบร้อย กรุุณาเข้าสู่ระบบ")

}

const reMoveUser = async (req,res) => {
  const id = req.params.id;
  const user = await prisma.user.delete({
    where: { id: id },
  })
  return res.send("ลบเสร็จสิ้น")
 
 }
module.exports = {
getAllUsers,getUserฺById,addUser,reMoveUser
}