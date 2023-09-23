import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import fs from 'fs'
import path from 'path'
import base64Img from 'base64-img'
import { BASE_URL } from "../../../components/Constants"
import excessimages from "../../../utils/excessimages"
import { v4 as uuidv4 } from 'uuid'
import axios from "axios"
import { EXTERNAL_API } from "../../../components/Constants"
const prisma = new PrismaClient({})
const cloudinary = require('cloudinary').v2;

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '20mb',
        },
    },
}

function saveFile(file) {
    const fileName = uuidv4();
    const uploadPath = path.join(process.cwd(), 'public', 'upload');
    const fileP = base64Img.imgSync(file, uploadPath, fileName)

    const fileurl = '/' + fileP
        .split(path.sep)
        .splice(-2)
        .join('/');

    return fileurl
}

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: 'damltcdhl',
    api_key: '289714989896362',
    api_secret: 'wiqdgXyqTszEnWI_0POx6jM9P-0',
  });
  
  

export default async (req, res) => {
    const session = await getSession({ req })
    if (session) {

        const { method, body } = req
        if (method == 'PUT') {
            const data = JSON.parse(body)
            // const images = JSON.parse(data.Images)
            const images = data.Images;
            const base64Images = images.filter(i => i.includes('base64'));
            const nonBase64Images = images.filter(i => !i.includes('base64'));
            // Base64-encoded image data
            const uploadImages = async() =>{
                let imageUrls = [];
                const uploadResults = await base64Images.map(async image =>{
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
            // const iPrep = images.map(image => {
            //     if (image.match('base64')) {
            //         return saveFile(image)
            //     } else {
            //         return image
            //     }
            // })
            // {...data, Images: JSON.stringify(iPrep)}
            const dataUpdate = {
                id: parseInt(data.id),
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
                // Images: JSON.stringify(iPrep)
                Images: [...await uploadImages(), ...nonBase64Images]
            }
            console.log('nonBase64Images: ',nonBase64Images);
            console.log('base64Images: ',base64Images);
            console.log('dataUpdate images: ',dataUpdate.Images);

            const response = await axios.post(EXTERNAL_API + '/update', dataUpdate, {
                headers: {
                    'Content-Type': 'application/json'
                }
                });
                const resData = response.data.car;
                console.log(resData);
            // const updateCar = await prisma.car.update({
            //     where: {
            //         id: dataUpdate.id
            //     },
            //     data: dataUpdate
            // })
            // const deleteExcessImages = await excessimages()
            
            // res.status(200).json({ updateCar, deleteExcessImages })
            res.status(200).json({ resData })
        }
    } else {
        redirect('/admin/login')
    }
}
