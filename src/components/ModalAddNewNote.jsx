import React, { useState } from "react";
import ItemForm from "./ItemForm";

export default function ModalAddNewNote() {
	const [number, setNumber] = useState(1);
	const [item, setItem] = useState(() => [{id: number,task: `Task ${number}`}]);
	
	const increaseItem = () => {
		setNumber(number + 1)
		console.log(number)
		setItem([...item, {id: number, task: `Task ${number}`}])
		console.log(item)
	}

	return(
		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content bg-dark">
					<div className="modal-header border-bottom border-primary">
						<h5 className="modal-title text-light" id="exampleModalLabel">Add New Note</h5>
						<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body text-light">
						<form>
							<div className="mb-3">
								<label className="form-check-label mb-2">Title</label>
								<input type="text" className="form-control"/>
							</div>
							<div id="item">
								{ item.map(x => <ItemForm item={x.task} />) }
							</div>
							<button type="button" className="btn btn-success" onClick={increaseItem}><i className='bx bx-plus' ></i> Task</button>
						</form>
					</div>
					<div className="modal-footer border-top border-primary">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Add</button>
					</div>
				</div>
			</div>
		</div>
	)
};
