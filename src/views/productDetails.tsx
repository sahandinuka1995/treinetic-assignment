import {Button, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {getProductDetailsById} from "../services/productService";
import * as React from "react";
import {AddShoppingCart, AttachMoney} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "../app/cartSlice";
import {findObject} from "../commonFunc/commonFunctions";

const ProductDetails = (props: any) => {
    const params: any = useParams()
    const [data, setData] = useState<any>(null)
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart.value)

    const addToCart = () => {
        dispatch(add(data))
    }

    const removeFromCart = () => {
        dispatch(remove(data))
    }

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const res = await getProductDetailsById(params?.id)
        if (res.status === 200) {
            setData(res.data)
        }
    }

    const foundItem = findObject(cart, data?.id)

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
                <Button variant="contained" size="small"
                        style={{backgroundColor: foundItem?.id === data?.id ? 'grey' : 'green'}}
                        onClick={() => (foundItem?.id === data?.id) ? removeFromCart() : addToCart()}>
                    {foundItem?.id === data?.id ? 'Added to Cart' : 'Add to Cart'}
                </Button>

                <Button variant="contained" size="small" color='warning' style={{marginLeft: 10}}>
                    <AttachMoney style={{marginRight: 10}}/> Buy Now
                </Button>
            </div>
        </Grid>
    </Grid>
}

export default ProductDetails