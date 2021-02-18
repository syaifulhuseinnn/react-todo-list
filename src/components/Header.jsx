import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import ModalAddNewNote from "./ModalAddNewNote";

export default function Header() {
	const showModal = () => {
		const myModal = new Modal(document.getElementById("exampleModal"));
		myModal.toggle();
	}

	return(
		<>
		<div className="d-flex justify-content-between align-items-center mb-5">
			<div>
				<h1 className="text-light">TODO APP✍</h1>
			</div>
			<div>
				<button type="button" className="btn btn-primary" onClick={showModal}><i className='bx bx-plus' ></i> Note</button>
			</div>
		</div>
		
		<ModalAddNewNote />
		</>
	)
};
