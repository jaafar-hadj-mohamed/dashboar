

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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import List1 from'./List1';
import Table from './Table';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Cards from './Cards';

import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
/*const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);*/
//redux
import { useSelector } from "react-redux";


//redux


export default function BasicCard() {
  const count=useSelector(state =>state.myProduct.products.length);
  return (
    
<Box>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
 
<Cards title='clients' count='5'icon={<AccountCircleIcon/>}/>
<Cards title='Revenue'count='$2000'icon={<MonetizationOnIcon/>}/>
<Cards title='Product' count={count} icon={<ProductionQuantityLimitsIcon/>}/>
</Grid>

<Box m={8} />

<Grid container >

<Grid item xs={12} sm={12} md={5}>
<List1/>
</Grid>
<Grid item xs={12} sm={12} md={7}>
<Chart2/>
</Grid>
</Grid>

</Box>





  );
}
