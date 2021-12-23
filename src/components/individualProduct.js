import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { addToCart } from '../store/actions/index';
//----------------------------------------------------------------------------------------------
export default function IndividualProduct() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    return (
        <Box sx={{ width: 700, background:'#fff', borderRadius:'5px', margin:'auto' }}>
            <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="center"
                marginTop="5vh"
                marginBottom="12vh"
            >
                <Grid item xs={6}>
                    <img
                        style={{ width: 210, height: 320, objectFit: 'cover' }}
                        alt={products.currentProduct.name}
                        src={products.currentProduct.image}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom variant="h5" color="black" >{products.currentProduct.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{products.currentProduct.description}</Typography><br/>
                    <Typography variant="body2" color="text.secondary">In-Stock: {products.currentProduct.inventoryCount}</Typography>
                    <Typography variant="body2" color="text.secondary">Price: {products.currentProduct.price} JD</Typography>
                    <br/><Button sx={{ background: "#3E242D", borderRadius: '40px' }} onClick={()=>dispatch(addToCart(products.currentProduct))} variant="contained">BUY</Button>{' '}
                    <Link to={'/'} style={{'text-decoration':'none'}}><Button sx={{ background: "#3E242D", borderRadius: '40px' }} variant="contained">BACK</Button></Link>
                </Grid>
            </Grid>
        </Box>
    )
}
