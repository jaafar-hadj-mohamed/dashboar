//with class
import { Avatar, Button, FormControl, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { color } from '@mui/system';
import { red } from '@mui/material/colors';


const paperStyle={padding:20, height:"70vh" ,width:320, margin:"20px auto"}
const avatarStyle={backgroundColor:'#3949AB'}
const btnStyle={margin: "8px 0"}/*
function Login() {*/

    class Login extends React.Component {
        constructor(props) {
        super(props);
        this.state = { username: "", password:"", authflag:1 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
        this.setState({ username: event.state.username, password: event.state.password });
        }
        handleSubmit(event) {
        event.preventDefault();
        if (this.state.username == 'jaafar@gmail.com' && this.state.password == '123456') {
        this.props.history.push("/");
        } else {
        alert('Incorrect Credntials!');
        }
        }
        render() {




    return (
      
      <Grid>
          <form onSubmit={this.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar  style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2> Sign in</h2>
          </Grid>
          <TextField type="email" placeholder="Email" name="username" margin="normal" label="username"  fullWidth required 
                            value={this.state.username}
                            onChange={(event) =>
                            this.setState({
                            [event.target.name]: event.target.value,
                            })
                            }
                            
                            ></TextField>
          <TextField margin="normal" label="password" placeholder="enter password" type="password" name="password" fullWidth required 
                            value={this.state.password}
                            onChange={(event) =>
                            this.setState({
                            [event.target.name]: event.target.value,
                            })
                            }
                            ></TextField>
          <Button  style={btnStyle} type="submit" color="primary" variant="contained" fullWidth>Sing in</Button>
        </Paper>
        </form>
      </Grid>
      
         
    );
  }
}
  
  export default Login;