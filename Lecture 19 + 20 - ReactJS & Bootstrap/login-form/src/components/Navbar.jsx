import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-1">
        <div className="container-fluid">
          <a className="navbar-brand" href={() => false}>UNKLAB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href={() => false}>Home</a> {/* Added ml-3 class */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href={() => false}>Project</a> {/* Added ml-3 class */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href={() => false}>About</a> {/* Added ml-3 class */}
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-3" type="text" placeholder="Search" /> {/* Added me-3 class */}
              <button className="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
