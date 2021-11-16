
import './App.css';
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";


import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Content from './components/Content';



function App() {
  return (<Router>
    <div className="App">
      
      <Switch> 
        <Route path={["/","/content","/content1","/clients","/users","/product"] }exact component={Dashboard}/>
        <Route path="/login" exact component={Login}/>
        
        <Route path="/dashboard" exact component={Dashboard}/>
        
        
        
        </Switch>  
        
    </div></Router>
  );
}

export default App;
