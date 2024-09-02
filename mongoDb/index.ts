import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  async function main() {
    await prisma.cliente.create({
      data: {
        nombre: 'Gabriel',
        apellido: 'Garcia Marquez',
        email: 'gabriel@mail.com',
      },
    })
  
    const allUsers = await prisma.cliente.findMany()
    console.dir(allUsers, { depth: null })
  }
  //const allUsers = await prisma.cliente.findMany()
  //console.log(allUsers)
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })