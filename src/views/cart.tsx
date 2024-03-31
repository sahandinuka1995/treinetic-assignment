import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import QuantityInput from "../components/quantityInput";
import {useDispatch, useSelector} from "react-redux";
import {changeQty, remove} from "../app/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart.value)

    return <Container maxWidth="md">
        <h2>Shopping Cart</h2>
        <Grid container spacing={{xs: 1, md: 4}} columns={{md: 12}}>
            {
                cart.map((item: any, i: number) => <Grid item md={12} key={i}>
                    <Card>
                        <CardActionArea>
                            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <CardMedia
                                    component="img"
                                    sx={{width: 151}}
                                    image={item.image}
                                    alt="Live from space album cover"
                                    style={{padding: 20}}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description.substring(0, 100)}...
                                    </Typography>
                                </CardContent>

                                <div style={{marginLeft: 20}}>
                                    <strong>Qty</strong>
                                    <br/>
                                    <br/>
                                    <QuantityInput value={item.qty}
                                                   onChange={(e: number) => dispatch(changeQty({item, e}))}/>
                                </div>

                                <div style={{
                                    padding: 30,
                                    flexDirection: "column",
                                    alignItems: 'flex-end',
                                    marginLeft: 20
                                }}
                                     className={'d-flex'}>
                                    <h2 style={{marginBottom: 10}}>$232</h2>
                                    <label style={{color: 'red', cursor: 'pointer'}}
                                           onClick={() => dispatch(remove(item))}>Remove</label>
                                </div>
                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>)
            }
        </Grid>
    </Container>
}

export default Cart