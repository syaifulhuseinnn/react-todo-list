import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListsNotes from "./components/ListsNotes";
import './css/style.css';

function App() {
	const [notes, setNotes] = useState(null);
	const [isPending, setIsPending] = useState(false);

	useEffect(() => {
		fetch("http://localhost:8000/notes")
			.then(response => response.json())
			.then((notes) => {
				setNotes(notes);
				setIsPending(true);
			})
		}, [])

	const deleteTask = (id) => {
		console.log("deleted", id)
	}

  return (
    <div className="container py-3">
			<Header />
			{ isPending && <ListsNotes notes={notes} /> }
		</div>
  );
}

export default App;
