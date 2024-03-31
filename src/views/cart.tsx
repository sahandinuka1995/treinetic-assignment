import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Typography,
    Button, Snackbar, Alert
} from "@mui/material";
import * as React from "react";
import QuantityInput from "../components/quantityInput";
import {useDispatch, useSelector} from "react-redux";
import {changeQty, remove} from "../app/cartSlice";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Cart = (props: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart.value)
    let totalPrice = 0
    const [toast, setToast] = useState(false)

    useEffect(() => {
        if (cart.length < 1) {
            setToast(true)
        }
    }, [])

    return <Container maxWidth="md">
        <Snackbar open={toast} autoHideDuration={6000} onClose={() => setToast(false)}>
            <Alert
                onClose={() => setToast(false)}
                severity="warning"
                variant="filled"
                sx={{width: '100%'}}
            >
                Your cart is empty!
            </Alert>
        </Snackbar>

        <h2>Shopping Cart</h2>
        <Grid container spacing={{xs: 1, md: 4}} columns={{md: 12}}>
            {
                cart.map((item: any, i: number) => {
                    totalPrice += (item.price * item.qty)
                    return <Grid item md={12} key={i}>
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
                                        <h2 style={{marginBottom: 10}}>${item.price}</h2>
                                        <label style={{color: 'red', cursor: 'pointer'}}
                                               onClick={() => dispatch(remove(item))}>Remove</label>
                                    </div>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                })
            }
        </Grid>
        <Divider style={{marginTop: 20}}/>

        <div className={'d-flex align-items-center justify-content-end'}>
            <div>
                <h4 className={'d-flex justify-content-end'} style={{marginBottom: 0, marginTop: 0}}>Total</h4>
                <small className={'d-flex justify-content-end'}
                       style={{marginTop: 0}}>{cart.length} Item{cart.length > 1 ? 's' : ''}</small>
            </div>

            <h2 style={{marginLeft: 40}}>${Number.parseFloat(totalPrice.toString()).toFixed(2)}</h2>
        </div>

        <Box
            m={1}
            //margin
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <Button variant="contained" className={'btn-md btn-primary'}>Checkout</Button>
        </Box>
    </Container>
}

export default Cart