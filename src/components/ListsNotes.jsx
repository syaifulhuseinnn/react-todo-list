import Note from "./Note";

export default function Lists({ notes }) {
	return(
		<div className="row row-cols-4 g-3">
			{ notes.map(note => <Note title={note.titleNote} tasks={note.tasks} key={note.id} />) }
		</div>
	)
};
