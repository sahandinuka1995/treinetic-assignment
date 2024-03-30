import {Button, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {getProductDetailsById} from "../services/productService";
import * as React from "react";
import {AddShoppingCart, AttachMoney} from "@mui/icons-material";

const ProductDetails = () => {
    useEffect(() => {
        loadData()
    }, [])

    const [data, setData] = useState<any>(null)

    const loadData = async () => {
        const res = await getProductDetailsById(3)
        if (res.status === 200) {
            console.log(res.data)
            setData(res.data)
        }
    }

    return <Grid container spacing={6}>
        <Grid item xs={4}>
            <img src={data?.image} width={'100%'}/>
        </Grid>
        <Grid item xs={8}>
            <small>Home | <small style={{color: '#1976D2'}}>{data?.category ?? ''}</small></small>
            <h1 style={{marginTop: 0}}>{data?.title ?? ''}</h1>
            <h3>${data?.price ?? 0}</h3>
            <p>{data?.description ?? ''}</p>

            <div style={{display: 'flex'}}>
                <Button variant="contained" size="small" color='success'>
                    <AddShoppingCart style={{marginRight: 10}}/> Add to Cart
                </Button>

                <Button variant="contained" size="small" color='warning' style={{marginLeft: 10}}>
                    <AttachMoney style={{marginRight: 10}}/> Buy Now
                </Button>
            </div>
        </Grid>
    </Grid>
}

export default ProductDetails