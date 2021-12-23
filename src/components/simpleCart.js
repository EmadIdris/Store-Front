import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import './headerStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, cartCheckout } from '../store/actions/index';
//----------------------------------------------------------------------------------------------------------------
export default function SimpleCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [ successAlert, setSuccessAlert ] = useState(false);
    const placeOrderHandler = () => {
        dispatch(cartCheckout());
        setSuccessAlert(true);
        setTimeout(()=>{
            setSuccessAlert(false);
        }, 6000);
    }
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
    return (
        <Grid container spacing={2} margin='auto' >
            <Grid item xs={6}>
                <div style={{ "justify-content": "center", "display": "flex", "margin-top": "30px" }}>
                    <TableContainer component={Paper} sx={{ width: 600 }} >
                        <Table align="center" sx={{ width: 600 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Product</strong></TableCell>
                                    <TableCell align="right"><strong>Price</strong></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.items.map((item, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.name}
                                        </TableCell>
                                        <TableCell align="right">{item.price} JD</TableCell>
                                        <TableCell align="right" className="cancelButton" sx={{ color: "#1B3A4B" }}
                                            onClick={() => dispatch(removeFromCart(item))}
                                        ><CancelIcon /></TableCell>
                                    </TableRow>
                                ))}
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"><strong>Total</strong></TableCell>
                                    <TableCell align="right">{cart.totalPrice} JD</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>

            <Grid item component={Paper} xs={5} style={{ "margin-top": "45px" }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                >
                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        variant="standard"
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        variant="standard"
                        multiline
                        required
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Address"
                        variant="standard"
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Credit Card Number"
                        variant="standard"
                        multiline
                        required

                    />
                    <TextField
                        id="outlined-textarea"
                        label="CVV"
                        variant="standard"
                        multiline
                    />
                    <br/><br/>
                    {!successAlert && <Button onClick={placeOrderHandler} sx={{ background: "#000100", borderRadius: '40px' }} variant="contained">Place Order</Button>}
                    <br/><br/>
                    {successAlert && <Alert severity="success">Your order has been placed successfully!</Alert>}
                </Box>
            </Grid>
        </Grid >
    );
}
