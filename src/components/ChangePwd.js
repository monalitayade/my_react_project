import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import {useHistory} from 'react-router-dom';

const ChangePwd = () => {

	var userName = localStorage.getItem("loginUsername");

	
	let history = useHistory();
	const [username, setUsername] = useState(userName);
	const [pwd, setPwd] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		var user = username;
		var password = pwd;

		console.log("changpwd",password);

		if(!password){
			console.log("fill empty field");
			
		}
		else{
			history.push("/");
		}
		
	}
	
	return(
		<div>
			<Navbar />
			<div className="container py-5 center-block">
				<div className="row d-flex justify-content-center">
					<div className="col-md-4 px-0">
					<form onSubmit={(e) => handleLogin(e)}>
					    <div className="form-group d-flex">
					      <label className="col-sm-3 px-0">Username:</label>
					      <input type="username" 
					      	className="form-control col-sm-9" 
					      	placeholder="Enter username" 
					      	name="username" 
					      	value={username}
					      	/>
					    </div>
					    <div className="form-group d-flex">
					      <label className="col-sm-3 px-0">Password:</label>
					      <input type="password" 
					      	className="form-control col-sm-9" 
					      	placeholder="Enter password" 
					      	name="pwd"
					      	value={pwd}
					      	onChange={(e) => setPwd(e.target.value)}
					      	/>
					    </div>
					    <div className="d-flex justify-content-around">
					   		<button className="btn btn-outline-secondary">Save Password</button>
					   	</div>
					  </form>
					</div>
				</div>
			</div>
		</div>
	);
	
}

export default ChangePwd;