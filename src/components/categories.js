import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { getAll, get } from '../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
//------------------------------------------------------------------------
function Categories() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, []);
    return(
        <div style={{'margin-top': '-50px'}}>
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#000100'}} onClick={()=> dispatch(get('fantasy'))}>Fantasy</Button></Link>{' '}
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#000100'}} onClick={()=> dispatch(get('fiction'))}>Fiction</Button></Link>{' '}
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#000100'}} onClick={()=> dispatch(get('horror'))}>Horror</Button></Link>{' '}
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#000100'}} onClick={()=> dispatch(get('science'))}>Science</Button></Link>
            <br/><br/>
            <h2>{categories.currentCategory?.displayName}</h2>
            <small>{categories.currentCategory?.description}</small>
        </div>
    )
}
export default Categories;
