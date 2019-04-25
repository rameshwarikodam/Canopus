import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
//import ContainedButtons from './component/button2';
import './signup.css';



const styles = theme => ({
  root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit ,
      //align:"center",
      color:"green",
     // background: "#123C69",
     height: 40,
    padding: "0 20px",
    borderRadius: 3,
    border: 0,
    },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color:'green',
  },
  label: {
    textTransform: "capitalize",
    paddingLeft: 5,
  },
  formControl: {
    margin: theme.spacing.unit,
    //align:"center",
    color:"#ac3b61",
  },
  button:{
    textalign:'center',
    width: '300px',
    height: '60px',
    color:"#ac3b61",
  },
});
const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ac3b61"
      }
    }
  });

class Presignup extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    email_id:'',
    mobile_number:'',
    password:'',
  }
  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
  }
onChange(e){
  this.setState({[e.target.name]:e.target.value});
}
onSubmit(e){
  e.preventDefault();
  this.props.userSignupRequest(this.state);
}
  render() {
    const { classes } = this.props;

    return (
      
 <div className={classes.container}>
    <Paper className="Paper" elevation={1} height="350px">
    <Paper className="Header" elevation={20} align="center" color="#123C69">
    <text>Sign Up</text>
            </Paper>
    <MuiThemeProvider theme={theme}>
    <form onSubmit={this.onSubmit}>
        <FormControl className={classes.formControl} variant="outlined" >
          <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email_id"
          value={this.state.email_id}
          onChange={this.onChange}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          color="#2551F9"
        />
        <TextField
          id="outlined-password-input"
          label="Phone Number"
          className={classes.textField}
          type="integer"
          name="mobile_number"
          value={this.state.mobile_number}
          onChange={this.onChange}
          autoComplete="current-phonenumber"
          margin="normal"
          variant="outlined"
        /> 
        <TextField
          id="outlined-email-input"
          label="Password"
          className={classes.textField}
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
          autoComplete="password"
          margin="normal"
          variant="outlined"
          color="#2551F9"
        />
        <button>Sign up</button>
        </FormControl>
      </form>
        </MuiThemeProvider>
        </Paper>
      </div>

    );
  }
}

Presignup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Presignup);