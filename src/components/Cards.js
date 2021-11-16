import * as React from 'react';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { CropRotateSharp } from '@mui/icons-material';

function Cards (props){

return(
    


 
    <Grid item xs={3} sm={4} md={4} >
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.title}
        <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
         
          <ListItemIcon >{props.icon} </ListItemIcon>
          </Box>
        </Typography>
        
        <Typography variant="h5" component="div">
        {props.count}
        </Typography>
        
        
      </CardContent>
      
    </Card>
    </Grid>
  
  
  


);

}export default Cards;