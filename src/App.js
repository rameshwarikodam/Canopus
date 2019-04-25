import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {userLoginRequest} from './Actions/LoginAction';

class App extends Component {
  render() {
    const {userLoginRequest}=this.props;
    return (
      <Login userLoginRequest={userLoginRequest}/>
      
    );
  }
}

App.propTypes = {
  userLoginRequest:PropTypes.object.isRequired,
}
export default connect((state)=>{return{} },{userLoginRequest})(App);
