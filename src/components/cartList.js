import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { closeCart } from '../store/actions/index';
//-------------------------------------------------------------------
export default function CartList() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(closeCart());
        }, 5000);
    }, []);
    return (
        <List sx={{ width: '100%', maxWidth: 350, minHeight: 20, borderRadius: '5px', backgroundColor: '#fff', color: '#000100', position: 'absolute', right: '10px' }}>
            {cart?.items.map(item => {
                return <div>
                    <ListItem disablePadding>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItem>
                    <Divider />
                </div>
            })}
        </List>
    )
}
