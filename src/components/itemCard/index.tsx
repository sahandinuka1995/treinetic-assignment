import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, Divider, Grid} from '@mui/material';

export default function ItemCard(props: any) {
    const {data} = props

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.image}
                    alt="green iguana"
                />
                <CardContent>
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

                    <Divider/>

                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} style={{marginTop: 10}}>
                        <Grid item xs={6}>
                            <Button variant="contained" size="small" color='success'>
                                Add to Cart
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