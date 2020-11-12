import React from 'react';
import { deleteDetail } from "../actions/actions";
import { useDispatch } from "react-redux";

const Row = ({data}) => {

	const dispatch = useDispatch();
	const {id, title, completed} = data;

	return(		    
    	<tr key={id}>
	    	<td>{id}</td>
	    	<td>{title}</td>
	    	<td>{completed ? "true":"false"}</td>
	    	<td><button className="btn btn-danger" onClick={()=>dispatch(deleteDetail(id))}>Delete</button></td>
    	</tr>	    
	)
	
}

export default Row;