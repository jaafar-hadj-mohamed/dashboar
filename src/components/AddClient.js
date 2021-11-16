import React ,{useState,useEffect}from 'react';

import {TextField,Box,Grid,Button } from '@mui/material';


//function AddClient(props){
   // const [client,setClient]=useState({name:'', city:''});
   class AddClient extends React.Component{
    state={name:'',city:''}
 handelChange=(e)=>{
    this.setState({[e.target.id]:e.target.value});
    console.log(this.state);
    }

 handelSubmit=(e)=>{
            e.preventDefault();
            console.log(this.state);
            //console.log(props.addClient(client));
            this.props.addClient(this.state);
            this.setState({
                name:'',
                city:''
            })
        }
       render(){
    return(
        
<Box >
            <Grid container >

<Grid item    xs={12} sm={12} md={12}>
          <form sx={{
        "& > :not(style)": { m: 1 }
      }} onSubmit={this.handelSubmit}>
<TextField sx={{ m: 2}} id="name" onChange={this.handelChange} label="Name" variant="outlined" value={this.state.name}/>
<TextField sx={{ m: 2}} id="city" onChange={this.handelChange} label="city" variant="outlined" value={this.state.city}/>

<Button sx={{ mt: 3}}  type="submit" color="primary" variant="contained" >Add</Button>
</form>
</Grid>
<Grid item >

</Grid>
</Grid>

</Box>

            
       
       );}
}
export default AddClient;
