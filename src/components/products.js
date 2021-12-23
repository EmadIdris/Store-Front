import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import { addToCart, decrementStock, currentProduct } from '../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
//---------------------------------------------------------------------------------------------------
function Products() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    return (
        <div>
            <Grid container justifyContent="space-evenly" alignItems="center">
                {products.categoryBooks.map((item, index) => {
                    return item.inventoryCount ? 
                    <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        {item ? (
                            <img
                                style={{ width: 210, height: 320, objectFit:'cover' }}
                                alt={item.name}
                                src={item.image}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={210} height={118} />
                        )}
                        {item ? (
                            <Box style={{ height: 200 }} sx={{ pr: 2 }} >
                                <hr/>
                                <Typography style={{ height: 40, fontWeight:'600', fontSize: 16, color:'white' }} gutterBottom variant="body2">
                                    {item.name}
                                </Typography>
                                <Typography style={{ minHeight: 60, color:'white' }} display="block" variant="caption" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography style={{ height: 20, color:'white', 'margin-top': '10px' }} variant="caption" color="text.secondary">
                                    {`${item.price} JD • ${item.inventoryCount} in stock`}
                                </Typography>
                                <br/><hr/>
                                <Button sx={{ background: "#000100"}} variant="contained" size="small" onClick={()=>{dispatch(addToCart(item)); dispatch(decrementStock(item))}}>Add To Cart</Button>{' '}
                                <Link to={`/products/${item.id}`} style={{'text-decoration':'none'}}><Button sx={{ background: "#000100" }} variant="contained" onClick={()=>dispatch(currentProduct(item))} size="small">More</Button></Link>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        )}
                    </Box>
                    : <strong>{item.name}<br/>Nothing</strong>
})}
            </Grid>
        </div>
    )
}
export default Products