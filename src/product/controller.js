const Prisma = require('@prisma/client')

const prisma = new Prisma.PrismaClient();


const getAllProduct = async (req,res) => {
    const product = await prisma.product.findMany({})
    return product
}

module.exports = {
    getAllProduct
}