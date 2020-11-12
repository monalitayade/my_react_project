import React from 'react';

const Data = ({data}) => { 

	return(
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<p className="text-left">{data.data}</p>
				</div>
			</div>
		</div>
	);	
}

export default Data;