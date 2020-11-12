import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const UserForm = ({userName,userPawd}) => {

	const [name, setName] = useState(userName);
	const [pawd, setPawd] = useState(userPawd);

	let history = useHistory();
	const [username, setUsername] = useState("");
	const [pwd, setPwd] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		var user = username;
		var password = pwd;
		if(user == "Monali" && password == "Monali"){
			console.log("login successfully",user,pwd);
			localStorage.setItem('login',user);
			history.push("/");
		}
		else{
			console.log("Invalid credential");
		}
		
	}
	
	return(
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
				      	value={name}
				      	/>
				    </div>
				    <div className="form-group d-flex">
				      <label className="col-sm-3 px-0">Password:</label>
				      <input type="password" 
				      	className="form-control col-sm-9" 
				      	placeholder="Enter password" 
				      	name="pwd"
				      	value={pawd}
				      	onChange={(e) => setPwd(e.target.value)}
				      	/>
				    </div>
				    <div className="d-flex justify-content-around">
				    	<Link to="/user/change-password">
				   		<button className="btn btn-outline-secondary">Change Password</button>
				   		</Link>
				   	</div>
				  </form>
				</div>
			</div>
		</div>
	);
	
}

export default UserForm;