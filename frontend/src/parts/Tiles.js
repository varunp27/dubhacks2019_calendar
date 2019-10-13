import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios';
import 'react-dropdown/style.css';
class Tiles extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      eventName : null,
      eventDuration : null,
      showRM: false
    }
    this.handleUpdateCalendar = this.handleUpdateCalendar.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleAddEvent(event) {
    event.preventDefault();
    this.setState({
      showRM : true
    })
  }

  handleClose(event) {
    this.setState({
      eventName : null,
      eventDuration : null,
      showRM : false,  
    })
  }

  handleUpdateCalendar(event) {
    event.preventDefault();
    debugger
      Axios({
        url: 'http://localhost:8080/' + this.state.eventName + '/' + this.state.eventDuration * 3600000 + '/', 
        method: "get",
        headers: {
        }
       
      })
      this.setState({
        eventName : null,
        eventDuration : null,
        showRM : false
      })
    }

    
      handleOnChange = (event) => {
          console.log("line 88", event.target.value);
          let obj = {}

          obj[event.target.id] = event.target.value;

          this.setState({

            ...this.state.eventName,

            ...this.state.eventDuration,

            ...obj


          })
        }

  render () {
    console.log(this.state);
  
    return (
      <div className = "center">
      <Card.Body>
        <Button variant="primary" onClick= {this.handleAddEvent}>Update Calendar</Button>
      </Card.Body>
      <Modal show={this.state.showRM}>
          <Modal.Header>
            <Modal.Title>Event Information</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.handleUpdateCalendar}>
            <Modal.Body>
              <label For="name">Event Name</label>
              <input id="eventName" name="eventName" type="text" onChange={this.handleOnChange} value={this.state.eventName} />
              <label For="name">Duration (hours)</label>
              <input id="eventDuration" name="eventDuration" type="text" onChange={this.handleOnChange} value={this.state.eventDuration} />
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary" >
                Add Event to Calendar
              </Button>
              <Button variant="secondary" onClick={this.handleClose} >
                Close
              </Button>             
            </Modal.Footer>
          </form>
        </Modal>
    </div>
    
    )
  }
  
}

export default Tiles;
