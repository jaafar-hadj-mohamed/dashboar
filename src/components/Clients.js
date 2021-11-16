import { Add } from '@mui/icons-material';
import React from 'react';
import AddClient from './AddClient';
import {ListItem,ListItemAvatar,Avatar,ListItemText,Typography,Divider,Grid, CardHeader ,Card, CardContent,CardActionArea,CardMedia} from '@mui/material';

//function Clients(){
/*const [clients, setClients]=useState([{name:"jaafar",city:"tunis"},
                                      { name:"jo",city:"sfax"}]);*/
class Clients extends React.Component{
    state={
        clients:[{name:"jaafar",city:"tunis"},
                 {name:"jo",city:"sfax"}]
        }

            addClient=(client)=>{
                
                let clients=this.state.clients;
                clients.unshift(client);
                this.setState({clients:clients});
                
            }
           
    render(){
        
        const ListClients=this.state.clients.map(client=>{    
               
           return(
               <div>
                  

                   <Grid item xs={12} sm={12} md={5}>
                  < ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={client.name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={client.name}
          secondary={
            
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               city: {client.city}
              </Typography>
              
            
          }
        />
      </ListItem>
      
      
</Grid>

               </div>
           )
       })
        return(
            <div>
            
            <AddClient addClient={this.addClient}/>
            
            <Card sx={{ maxWidth: 450 }} >
                <CardHeader title="Liste Clients">
                
                    </CardHeader>
                <CardContent>
                
                   
                    {ListClients}
                
            
                </CardContent>
      
            </Card>
            </div>
        );
    }
}
export default Clients;