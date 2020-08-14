import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// // AS CLASS COMPONENT

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}


// // AS STATELESS FUNCTION

// const Navbar = () => {
//   return ( <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//   <Link to="/" className="navbar-brand">Excer Tracker</Link>
//   <div className="collpase navbar-collapse">
//   <ul className="navbar-nav mr-auto">
//     <li className="navbar-item">
//     <Link to="/" className="nav-link">Exercises</Link>
//     </li>
//     <li className="navbar-item">
//     <Link to="/create" className="nav-link">Create Exercise Log</Link>
//     </li>
//     <li className="navbar-item">
//     <Link to="/user" className="nav-link">Create User</Link>
//     </li>
//   </ul>
//   </div>
// </nav> );
// }
 
// export default Navbar;