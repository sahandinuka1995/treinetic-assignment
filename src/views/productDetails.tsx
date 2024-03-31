import {Button, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {getProductDetailsById} from "../services/productService";
import * as React from "react";
import {AddShoppingCart, AttachMoney} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "../app/cartSlice";
import {findObject} from "../commonFunc/commonFunctions";
import {
    Unstable_NumberInput as BaseNumberInput,
    NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import {styled} from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import QuantityInput from "../components/quantityInput";

const ProductDetails = (props: any) => {
    const params: any = useParams()
    const [data, setData] = useState<any>(null)
    const [qty, setQty] = useState<any>(1)
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart.value)

    const addToCart = () => {
        dispatch(add({...data, qty}))
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

    return <Grid container spacing={6} columns={{md: 12}} style={{padding: '5%'}}>
        <Grid item xs={4} md={3}>
            <img src={data?.image} width={'100%'}/>
        </Grid>
        <Grid item xs={8}>
            <small>Home | <small style={{color: '#1976D2'}}>{data?.category ?? ''}</small></small>
            <h1 style={{marginTop: 0}}>{data?.title ?? ''}</h1>
            <h3>${data?.price ?? 0}</h3>
            <p>{data?.description ?? ''}</p>

            <div className={'d-flex align-items-center mb-20'}>
                <label className={'mr-20'}>Quantity</label>
                <QuantityInput value={qty}
                               onChange={setQty}/>
            </div>

            <div style={{display: 'flex'}}>
                <Button variant="contained"
                        className={`btn-md ${foundItem?.id === data?.id ? 'btn-secondary' : 'btn-primary'}`}
                        onClick={() => (foundItem?.id === data?.id) ? removeFromCart() : addToCart()}>
                    {foundItem?.id === data?.id ? <><RemoveIcon style={{marginRight: 10}}/> Added to Cart</> : <>
                        <AddShoppingCart style={{marginRight: 10}}/> Add to
                        Cart</>}
                </Button>

                <Button variant="contained" className={'btn-md'} color='warning' style={{marginLeft: 10}}>
                    <AttachMoney style={{marginRight: 10}}/> Buy Now
                </Button>
            </div>
        </Grid>
    </Grid>
}

export default ProductDetails