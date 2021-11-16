import React from 'react';
import Content from './Content';
import { BrowserRouter as Router, Route, Link ,Switch ,NavLink} from "react-router-dom";
import Content1 from './Content1';
import Users from './Users';

import Clients from './Clients';
import Product from './Product';
import ListProduct from './ListProduct';




import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


const drawerWidth = 240;

function ResponsiveDrawer(propsSidebar,props) {
  const {sidebarName}=propsSidebar;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem button component={Link} to="/">
          
          <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
          <ListItemText primary= "home"/>
      </ListItem>
      <ListItem button component={Link} to="/users">
          
          <ListItemIcon><PeopleAltOutlinedIcon /></ListItemIcon>
          <ListItemText primary= "users"/>
      </ListItem>
      <ListItem button component={Link} to="/content1">
          
          <ListItemIcon><StackedBarChartOutlinedIcon /></ListItemIcon>
          <ListItemText primary= "charts"/>
      </ListItem>
      
      <ListItem button component={Link} to="/clients">
      <ListItemIcon><AccountCircleIcon /></ListItemIcon>
        <ListItemText primary="clients"/>
      </ListItem>

      <ListItem button component={Link} to="/product">
      <ListItemIcon><ProductionQuantityLimitsIcon /></ListItemIcon>
        <ListItemText primary="product"/>
      </ListItem>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (<Router>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           {sidebarName}
           
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          
          
        <IconButton
          size="large"
          aria-label="show 3 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" color="inherit">
          <AccountCircleIcon /></IconButton>
        
     
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
     

        <Switch> 
        
        <Route path={["/","/content"] }exact component={Content}/>
        <Route path="/users">
        <Users/>
        </Route>
        <Route path="/content1">
        <Content1 />
        </Route>
       
        <Route path="/clients">
          <Clients/>
        </Route>
        <Route path="/product">
          <Product/>
          <ListProduct/>
        </Route>
        </Switch>  
    
      </Box>
    </Box></Router>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;










 /*function Sidebar() {
   
    return (
    
    
       
    
   <Router>
      <div className="Sidebar">
        <h1>Sidebar</h1>
        <div>
        <Link  to="/content">content</Link>
        <Link  to="/content1">content1</Link>
        </div>

        <Switch> 
        
        
        <Route path="/content">
        <Content />
        </Route>
        <Route path="/content1" exact component={Content1}/>
        
        </Switch>  
    </div></Router>
      
      
         
    );
  }
  
  export default Sidebar;*/