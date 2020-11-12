import React from 'react';
import {useSelector} from 'react-redux';
import Row from '../components/Row';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

const Task = () => {
	const detail = useSelector(state => state.contacts.contacts);	
	// let [detail, setDetail] = useState([]);
	// const url = 'http://jsonplaceholder.typicode.com/todos';

	// useEffect(async () => {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	setDetail(data);
	// },[]);

	
	return(
		
		<React.Fragment>
			<Navbar />
			<div className="container">
				<div className="row d-flex flex-row-reverse">
					<Link to="/task/addDetail" className="btn btn-primary text-white my-2">Add Task</Link>
				</div>
				<div className="row">
					<table className="table table-bordered">
				    <thead>
				      <tr>
				      	<th>id</th>
				        <th>Title</th>
				        <th>Completed</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>
				    { 
				    	detail.map((data,key) =>  (
				    		<Row data={data}  key={key}/>
				    	))
				    }
					</tbody>
				  </table>
				</div>
		  </div>
		</React.Fragment>
	);	
}

export default Task;