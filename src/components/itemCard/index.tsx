import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, CardActionArea, Divider, Grid} from '@mui/material';
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
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <Link to={`/product/${data?.id}`} style={linkStyle}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.image}
                        alt="green iguana"
                    />
                </Link>
                <CardContent>
                    <Link to={`/product/${data?.id}`} style={linkStyle}>
                        <>
                            <Grid container spacing={{xs: 1, md: 1}} columns={12}
                                  style={{display: 'flex', alignItems: 'center'}}>
                                <Grid item md={9}>
                                    <strong>{data?.title}</strong>
                                </Grid>

                                <Grid item md={3}>
                                    <strong style={{fontSize: 20}}>${data?.price}</strong>
                                </Grid>
                            </Grid>

                            <p style={{marginTop: 10}}>{data?.description?.substring(0, 80)}...</p>
                        </>
                    </Link>

                    <Divider/>

                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} style={{marginTop: 10}}>
                        <Grid item xs={6}>
                            <Button variant="contained" size="small"
                                    style={{backgroundColor: foundItem?.id === data?.id ? 'grey' : 'green'}}
                                    onClick={() => (foundItem?.id === data?.id) ? removeFromCart() : addToCart()}>
                                {foundItem?.id === data?.id ? 'Added to Cart' : 'Add to Cart'}
                            </Button>
                        </Grid>
                        <Grid item xs={6} style={{display: 'flex', justifyContent: 'right'}}>
                            <Button variant="contained" size="small" color='warning'>
                                Buy Now
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}