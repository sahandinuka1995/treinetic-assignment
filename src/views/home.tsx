import React, {useEffect, useState} from 'react';
import {getAllProducts} from "../services/productService";
import {Grid} from "@mui/material";
import ItemCard from "../components/itemCard";

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
        <Grid container spacing={{xs: 1, md: 4}} columns={{xs: 3, sm: 8, md: 12}}>
            {data.map((item: any, index: React.Key | null | undefined) => <Grid item xs={2} sm={4} md={3}
                                                                                key={index}>
                <ItemCard data={item} index={index}/>
            </Grid>)}
        </Grid>
    </div>
};

export default Home;