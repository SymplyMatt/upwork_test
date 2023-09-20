import { PrismaClient } from "@prisma/client"
// import initMiddleware from "../../utils/init-middleware"
// import Cors from 'cors'

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// )



const prisma = new PrismaClient({ })

export default async (req, res) => {
    const cars = await prisma.car.findMany();
    res.status(200).json(cars);
}
