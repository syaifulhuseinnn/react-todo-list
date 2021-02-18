export default function Todo({ strTask, strDesc }) {
	return(
		<>
			<div className="d-flex justify-content-between task px-3 py-2 my-3 rounded">
				<div className="align-self-center">
					<input type="checkbox" className="form-check-input"/>
				</div>
				<div className="flex-grow-1 d-block text-truncate mx-3">
					<h6 className="text-light">{strTask}</h6>
					<small className="text-info">{strDesc}</small>
				</div>
				<div>
					<i className='bx bx-x fs-6 cross text-warning'></i>
				</div>
			</div>
		</>
	)
};
