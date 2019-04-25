import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const theme = createMuiTheme({
  palette: {
  primary : {
    main:"#ac3b61",
  },
  secondary: {
    main:"#ffc107"
  }
}
});

class ContainedButtons extends React.Component {
  render() {
  const { classes } = this.props;
  return (
    <div>
      <MuiThemeProvider theme ={theme}>
      <Button variant= "outlined" className={classes.button}>
       <Typography>{this.props.text}</Typography>
      </Button>
       <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label> 
      </MuiThemeProvider>
    </div>
  );
  }
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);