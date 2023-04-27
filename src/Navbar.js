import React from "react";
import { Link ,NavLink} from "react-router-dom";


const Navbar=()=>{
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<div className="container-fluid">
    <Link className="navbar-brand" href="#">User</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink className="nav-link active" 
          aria-current="page"  exact to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" 
          aria-current="page" exact to="/about">About us</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link active"
         aria-current="page" exact to="/contact">Contact</NavLink>
        </li>
       
      </ul>
    </div>
    <Link className="btn btn-outline-light" to="/users/create_user">Create User</Link>
  </div>
</nav>
    );
}

export default Navbar;