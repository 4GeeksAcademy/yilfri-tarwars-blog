import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx"
import { useEffect } from "react";

export const Home = () => {
	
	const {store, dispatch} = useGlobalReducer()

	function getPersonajes () {
		fetch("https://www.swapi.tech/api/people")
		.then(res => res.json())
		.then(data => {
			dispatch({
				type: "get_personajes",
				payload: data.results
			})
		})
		.catch(error => {
			console.log(error)
			dispatch({
				type: "get_personajes",
				payload: []
			})
		})
	}

	useEffect(() => {
		getPersonajes()
	},[])


	return (
		<div className="m-5">
			<h1>Personajes</h1>
			<div className="d-flex overflow-x-scroll gap-3">
				{store.personajes.map((personaje) => (
					<Card name={personaje.name} uid={personaje.uid} key={personaje.uid}/>
				))}
			</div>
		</div>
	);
}; 