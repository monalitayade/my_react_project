import React from 'react';
import Navbar from '../components/Navbar';
import UserForm from '../components/UserForm';

const User = () => {
	var userName = localStorage.getItem("loginUsername");
	var userPawd = localStorage.getItem("loginUsername");

	console.log("user.js",userName,userPawd);
	return(
		<div>
			<Navbar />
			<UserForm userName={userName} userPawd={userPawd}/>
		</div>
	);	
}

export default User;
