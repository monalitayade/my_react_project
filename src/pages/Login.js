import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignInForm = () => {

	let history = useHistory();	

	const [username, setUsername] = useState("");
	const [pwd, setPwd] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Login",username,pwd);
		
		var user = username;
		var password = pwd;

		if(user != null && password != null){
			console.log("login successfully",user,pwd);
			localStorage.setItem('loginUsername',user);
			localStorage.setItem('loginPawd',password);
			history.push("/");
		}		
	}
	
	return(
		<div>
			<Navbar />
			<div className="d-flex justify-content-center">
				<div className="col-md-4 px-0 py-5">
				<form onSubmit={(e) => handleLogin(e)}>
				    <div className="form-group d-flex">
				      <label className="col-sm-3 px-0">Username:</label>
				      <input type="username" 
				      	className="form-control col-sm-9" 
				      	placeholder="Enter username" 
				      	name="username" 
				      	value={username}
				      	onChange={(e) => setUsername(e.target.value)}
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
				   		<button className="btn btn-outline-secondary">LogIn</button>
				   	</div>
				  </form>
				</div>
			</div>
		</div>
	);
	
}

export default SignInForm;