import React,{useState} from "react";
import {addNewProduct } from './../actions/productAction';
import {useDispatch } from 'react-redux';
import {TextField,Box,Grid,Button } from '@mui/material';
function Product(){
    const dispatch=useDispatch();

    const [product, setProduct]=useState({
        id:0,
        name:'',
        cat:'',
        qty:''
        
    })
    const handleChange=(e)=>{
       
        setProduct({...product,[e.target.id]:e.target.value})
        
        console.log("change",product);
    }
    const submitForm=(e)=>{
        e.preventDefault();
        product.id=Math.random()*1000;
        dispatch(addNewProduct(product))
        console.log("al",product);
    }
    
    return(
       

            <Box >
            <Grid container >

<Grid item    xs={12} sm={12} md={12}>
          <form sx={{
        "& > :not(style)": { m: 1 }
      }} onSubmit={submitForm}>
          
<TextField sx={{ m: 2}} id="name"   onChange={handleChange} label="Name Product" variant="outlined" />
<TextField sx={{ m: 2}} id="cat"    onChange={handleChange} label="cat" variant="outlined"  />
<TextField sx={{ m: 2}} id="qty"    onChange={handleChange} label="Quantity" variant="outlined"  />




<Button sx={{ mt: 3}}  type="submit" color="primary" variant="contained" >Add Product</Button>
</form>
</Grid>
<Grid item >

</Grid>
</Grid>

</Box>
   
        
    )
}
export default Product;