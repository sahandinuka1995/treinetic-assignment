import React, {useEffect, useState} from 'react';
import {getAllProducts} from "../services/productService";
import {Grid} from "@mui/material";
import ItemCard from "../components/itemCard";
import imgBanner from '../assets/img/top-banner.jpg'

const Home = () => {
    useEffect(() => {
        loadData()
    }, [])

    const [data, setData] = useState<any>([])

    const loadData = async () => {
        const res = await getAllProducts()
        if (res.status === 200) {
            // @ts-ignore
            setData(res.data.map((item: any) => {
                return {
                    ...item,
                    qty: 1
                }
            }))
        }
    }

    return <div>
        <img src={imgBanner} width={'100%'} style={{marginBottom: 20}}/>
        <Grid container spacing={{xs: 1, md: 4}} columns={{xs: 1, sm: 12, md: 12, lg: 12}}>
            {data.map((item: any, index: React.Key | null | undefined) => <Grid item xs={12} sm={6} md={3} lg={2}
                                                                                key={index}>
                <ItemCard data={item} index={index}/>
            </Grid>)}
        </Grid>
    </div>
};

export default Home;