import React, {Component} from 'react';
import Navigation from './parts/Navigation'
import LoginnLink from './parts/LoginnLink'
import Tiles from './parts/Tiles'
//import {BrowserRouter, Route, Link} from 'react-router-dom'
//import Loginn from './parts/Loginn'
//import {Route, Link} from "react-router-dom";
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal'



class App extends Component {
  render(){
  return ( 
    <div className="App">
    <Navigation />
    <LoginnLink />
    <Tiles />
    
    
    </div>
    
    
  );
}
}
export default App;
