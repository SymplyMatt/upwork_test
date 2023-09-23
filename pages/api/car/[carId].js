import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import axios from "axios"
import { EXTERNAL_API } from "../../../components/Constants"
const prisma = new PrismaClient({})

export default async (req, res) => {
    const { method } = req
    const { carId } = JSON.parse(req.query)
    switch (method) {
        case 'GET':
            // Get data from database with carId
            const response = await axios.post(process.env.EXTERNAL_API + '/getCar', {
                id: carId
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
                });
                const resData = response.data.car;
            // const car = await prisma.car.findUnique({
            //     where: {
            //         model: carId
            //     }
            // });
            
            res.status(200).json(resData)
            break
        }

}
