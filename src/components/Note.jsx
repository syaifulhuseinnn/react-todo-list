import Tasks from './Tasks';

export default function Note({title, tasks}) {
	return(
		<div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
			<div className="lists rounded p-3">
				<div className="d-flex justify-content-between align-items-center">
					<div className="flex-grow-1">
						<h5 className="text-light">{title}</h5>
					</div>
					<div>
						<i className='bx bx-expand-alt text-light'></i>
					</div>
				</div>
				<Tasks items={tasks} />
			</div>
		</div>
	)
};
