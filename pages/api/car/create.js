import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import fs from 'fs'
import path from 'path'
import base64Img from 'base64-img'
import { v4 as uuidv4 } from 'uuid'
import axios from "axios"
const cloudinary = require('cloudinary').v2;
const prisma = new PrismaClient({})
import { EXTERNAL_API } from "../../../components/Constants"
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '20mb',
        },
    },
}

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'damltcdhl',
  api_key: '289714989896362',
  api_secret: 'wiqdgXyqTszEnWI_0POx6jM9P-0',
});




function saveFile(file, index) {
    // const fileName = Date.now() + "_" + index
    const fileName = uuidv4();
    const uploadPath = path.join(process.cwd(), 'public', 'upload');
    const fileP = base64Img.imgSync(file, uploadPath, fileName)
    const fileurl = '/' + fileP
        .split(path.sep)
        .splice(-2)
        .join('/');

    return fileurl
}



export default async (req, res) => {
    const session = await getSession({ req })
    if (session) {
        const { method, body } = req
        if (method == 'PUT') {
            const data = JSON.parse(body)
            const images = data.Images
            // const iPrep = images.map((image, index) => {
            //     if (image.match('base64')) {
            //         return saveFile(image, index)
            //     } else {
            //         return image
            //     }
            // })
            // Base64-encoded image data
            const uploadImages = async() =>{
                let imageUrls = [];
                const uploadResults = await images.map(async image =>{
                    // Upload the image
                    try {
                        const res = await cloudinary.uploader.upload(image, { resource_type: 'image' }, async (error, result) => {
                            imageUrls.push(result.secure_url)
                        if (error) {
                            console.error('Error uploading image:', error);
                        } else {
                            console.log('Image uploaded:', result.secure_url);
                        }
                        });
                    } catch (error) {
                        
                    }
                });
                const awaitPromises = await Promise.all(uploadResults);
                return imageUrls

            }
            const dataToSend = {
                model: data.model,
                Year: parseInt(data.Year),
                Engine: data.Engine,
                Fuel: data.Fuel,
                Transmission: data.Transmission,
                Doors: parseInt(data.Doors),
                Consumption: parseInt(data.Consumption),
                Day: parseInt(data.Day),
                Sixday: parseInt(data.Sixday),
                Week: parseInt(data.Week),
                Month: parseInt(data.Month),
                // Images: JSON.stringify(images)
                Images: await uploadImages()
            }
            console.log('data sent: ', dataToSend);
            const response = await axios.post(EXTERNAL_API + '/create', dataToSend, {
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const resData = response.data.newCar;   
            console.log('data received: ',resData);

            // const dataCreate = {
            //     model: data.model,
            //     Year: parseInt(data.Year),
            //     Engine: data.Engine,
            //     Fuel: data.Fuel,
            //     Transmission: data.Transmission,
            //     Doors: parseInt(data.Doors),
            //     Consumption: parseInt(data.Consumption),
            //     Day: parseInt(data.Day),
            //     Sixday: parseInt(data.Sixday),
            //     Week: parseInt(data.Week),
            //     Month: parseInt(data.Month),
            //     Images: JSON.stringify(iPrep)
            // }

            // const createCar = await prisma.car.create({
            //     data: dataCreate
            // })


            
            res.status(200).json(resData)

        }
    } else {
        redirect('/admin/login')
    }
}
