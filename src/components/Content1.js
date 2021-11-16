import { Chart } from 'chart.js';
import React from 'react';
import Table from './Table';

import Chart1 from './Chart1';
import { Box } from '@mui/system';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function Content1() {
    return (

<Grid container direction="column">

    <Grid item container>
      
    
        <Grid item xs={12} sm={12} md={6}>
        <Chart1/>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
        <Chart1/>
        </Grid>
        
      
    
    </Grid>
  

</Grid>
     
     /* <div className="Content1">
        <Table/>
        <div className="card">
        <Chart1/></div>
        <div className="card">
        <Chart1/></div>
      </div>*/
      
         
    );
  }
  
  export default Content1;