import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-md bg-dark navbar-dark">
		  <Link className="navbar-brand" to="/">Logo</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="collapsibleNavbar">
		    <ul className="navbar-nav">
		      <li className="nav-item">
		        <Link className="nav-link" to="/">Home</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/task/">Task</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/user/">User</Link>
		      </li>    
		      {
		      	localStorage.getItem('loginUsername') ?
		      		<li className="nav-item">
			        	<Link className="nav-link" to="/logout">Logout</Link>
			      	</li>
			      	:
			      	<li className="nav-item">
				        <Link className="nav-link" to="/login">Login</Link>
			      	</li>
		      }
		    </ul>
		  </div>  
		</nav>
	);
}

export default Navbar;
