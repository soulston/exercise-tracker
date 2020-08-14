import React, { Component } from 'react';
import axios from 'axios';
import Alert from './alert'

class CreateUser extends Component {
  state = {
    username: '',
    alertState: false,
    alertMessage: false
  }
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
        console.log("User added!");
        this.setState({
          alertState: 'success',
          alertMessage: 'The user was created successfully.'
        });
        
      })
      .catch((e) => 
      {
        console.error(e);
        this.setState({
          alertState: 'danger',
          alertMessage: 'The user was not created. Please try again later.'
        });
      });

    this.setState({
      username: ''
    });
    
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <Alert alertState={this.state.alertState} alertMessage={this.state.alertMessage} />
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

export default CreateUser;