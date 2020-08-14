import React, { Component } from 'react';
import axios from 'axios';
import Alerts from './alerts'

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      alertState: false,
      alertMessage: false
    }


  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    // console.log(user);

    axios
      .post('http://localhost:5000/users/adds', user)
      .then((response) => {
        this.setState({
          alertState: 'success',
          alertMessage: 'The user was created successfully.'
        });
        //this.setState({name: response.data.name});
      })
      .catch((e) => 
      {
        console.error(e);
          this.setState({
          alertState: 'error',
          alertMessage: 'The user was not created.'
        });
      });

    this.setState({
      username: ''
    });
    
    //   .then((response => { 
    //     // console.log(response.data);
    //     this.setState({
    //       alertState: 'success',
    //       alertMessage: 'The user was created successfully.'
    //     })
    //   })
    //   .catch((e) => {
    //     console.log('Error: ' + e);
    //     this.setState({
    //       alertState: 'error',
    //       alertMessage: 'The user was not created.'
    //     });
    //   })
    // );
    // this.setState({
    //   username: ''
    // });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <Alerts />
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}