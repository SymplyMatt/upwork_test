import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import excessimages from "../../../utils/excessimages"
import axios from "axios";
import { EXTERNAL_API } from "../../../components/Constants";
const prisma = new PrismaClient({});

export default async (req, res) => {
    const session = await getSession({ req });
    const { method, body } = req;
    const data = JSON.parse(body);

    if (!session) res.status(501).json({message: 'permission denied'});
    if (method !== 'DELETE') res.status(501).json({message: 'bad mathod'});
    const response = await axios.post(EXTERNAL_API + '/delete', {
        id: data.id
    },{
        headers: {
            'Content-Type': 'application/json'
        }
        });
        const resData = response.data.car;
        console.log(resData);
    // const deleteCar = await prisma.car.delete({
    //     where: {
    //         id: data.id
    //     }
    // });

    // const deleteExcessImages = await excessimages();

    res.status(200).json(body);
}
