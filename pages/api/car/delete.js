import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import excessimages from "../../../utils/excessimages"

const prisma = new PrismaClient({});

export default async (req, res) => {
    const session = await getSession({ req });
    const { method, body } = req;
    const data = JSON.parse(body);

    if (!session) res.status(501).json({message: 'permission denied'});
    if (method !== 'DELETE') res.status(501).json({message: 'bad mathod'});

    const deleteCar = await prisma.car.delete({
        where: {
            id: data.id
        }
    });

    const deleteExcessImages = await excessimages();

    res.status(200).json(body);
}
