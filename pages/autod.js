import { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../components/Constants'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { EXTERNAL_API } from '../components/Constants'
export default function Autod({ data }) {
    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const { catalog } = ctx.state

    const AutodPage = dynamic(() => import(`../components/Content/${lang}/Autod/AutodPage`))

    useEffect(async () => {
        if (data.status !== 200) {
            try {
                const response = await axios.get(EXTERNAL_API + '/getAll', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    });
                    const resData = response.data.allCars;
                const res = await fetch(BASE_URL + "api/catalog");
                console.log(BASE_URL);
                const json = await res.json()
                ctx.setCatalog(resData);
            } catch (e) {
                console.log(e)
            }
        } else {
            ctx.setCatalog(data.cars)
        }
    }, [data])
    
    return <AutodPage />
}

Autod.getInitialProps = async (ctx) => {
    try {
        const response = await axios.get(EXTERNAL_API + '/getAll', {
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const resData = response.data.allCars;
            console.log(resData);
        // const res = await fetch(BASE_URL + "api/catalog")
        // const json = await res.json()
        return { data: { cars: resData, status: 200 } }
    } catch (e) {
        return { data: { cars: null, status: 403 } }
    }
}