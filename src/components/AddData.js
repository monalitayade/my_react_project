import React, {useState} from 'react';
import {useDispatch} from 'react-redux'; 
import Navbar from '../components/Navbar';
import {addDetail} from '../actions/actions';
import {useHistory} from 'react-router-dom';
import shortid from 'shortid'; 

const AddContact = () => {
	let history = useHistory();
	const dispatch = useDispatch();

	const [id, setId] = useState("");
	const [title, setTitle] = useState("");
	const [completed, setCompleted] = useState("");
	
	const createContact = e => {
		e.preventDefault();
		console.log(id,title,completed);
		const new_Detail = {
			id:shortid.generate(),
			title:title,
			completed:completed,
		};
		dispatch(addDetail(new_Detail));
		history.push("/task");
	}
	return(
		<div className="container-fluid px-0">
			<Navbar />
			<div className="row mx-0 d-flex justify-content-center">
				<div className="col-sm-6 py-5">
					<div className="card border-0 shadow">
						<h4 className="card-header primary-color main-text font-weight-bold text-transform">
							Add Details
						</h4>
						<div className="card-body">
							<form onSubmit={(e) => createContact(e)}>
								<div className="form-group">
									<input type="text" className="form-control"
									    placeholder="Enter title"
									    value={title}
									    onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control"
									    placeholder="Enter completed"
									    value={completed}
									    onChange={(e) => setCompleted(e.target.value)}
									/>
								</div>
								<button className="btn btn-primary text-white" type="submit">Add Details
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddContact;