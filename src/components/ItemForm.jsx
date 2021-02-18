export default function ItemForm({item}) {
	return(
		<div className="mb-3">
			<h6>{item}</h6>
			<input type="text" className="form-control form-control-sm bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-bottom text-light mb-3 outline-off p-0 mb-3" placeholder="Task"/>
			<input type="text" className="form-control form-control-sm bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-bottom text-secondary mb-3 outline-off p-0" placeholder="Description"/>
		</div>
	)
};
