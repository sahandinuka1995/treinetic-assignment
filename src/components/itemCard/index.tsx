import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, CardActionArea, Divider, Grid, Rating} from '@mui/material';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {add, remove} from "../../app/cartSlice";
import {findObject} from "../../commonFunc/commonFunctions";

const linkStyle = {
    textDecoration: 'none', color: '#000'
}

export default function ItemCard(props: any) {
    const {data, index} = props
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart.value)

    const addToCart = () => {
        dispatch(add(data))
    }

    const removeFromCart = () => {
        dispatch(remove(data))
    }

    const foundItem = findObject(cart, data.id)

    return (
        <Card>
            <CardActionArea>
                <Link to={`/product/${data?.id}`} style={linkStyle}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.image}
                        alt="green iguana"
                        style={{padding: 20}}
                    />
                </Link>
                <CardContent>
                    <Link to={`/product/${data?.id}`} style={linkStyle}>
                        <>
                            <p style={{
                                marginTop: 0,
                                marginBottom: 10,
                                fontWeight: 'bold'
                            }}>{data?.title?.substring(0, 20)}...</p>
                            <Rating name="read-only" value={data?.rating?.rate ?? 0} readOnly size="small"/>
                            <br/>
                            <strong style={{fontSize: 20}}>${data?.price}</strong>

                            <p style={{marginTop: 10}}>{data?.description?.substring(0, 15)}...</p>
                        </>
                    </Link>

                    <Divider/>

                    <Button variant="contained" size="small"
                            className={`btn ${foundItem?.id === data?.id ? 'btn-secondary' : 'btn-primary'}`}
                            style={{marginTop: 10}}
                            onClick={() => (foundItem?.id === data?.id) ? removeFromCart() : addToCart()}>
                        {foundItem?.id === data?.id ? 'Added to Cart' : 'Add to Cart'}
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}