import React, { useState } from 'react';

const DropDown = ({onSelect}) => {

	const options = [{value:"What is Lorem Ipsum?"}, {value:"Why do we use it?"}]

	const [getValue, setGetValue] = useState("");

	const onInputSelect = (value) => {
		setGetValue(value);
		onSelect(value);
	}	
	return(
		<div className="container py-3 input-group flex-nowrap">
			<div className="form-group">
			   
			    <select className="form-control" 
			    	onChange = {e => onInputSelect(e.target.value)}>
			      {
			      	options.map((option,index) => (
			      		<option value={option.value} key={index}>
			      			{option.value}
			      		</option>
			      	))
			      }
			    </select>
			  	</div>
		</div>
	)
}

export default DropDown;