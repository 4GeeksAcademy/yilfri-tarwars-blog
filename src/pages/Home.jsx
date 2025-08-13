import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx"
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	function getPersonajes() {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "get_personajes",
					payload: data.results
				})
			})
			.catch(error => {
				dispatch({
					type: "get_personajes",
					payload: []
				})
			})
	}

	function getPlanetas() {
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "get_planetas",
					payload: data.results
				})
			})
			.catch(error => {
				dispatch({
					type: "get_planetas",
					payload: []
				})
			})
	}

	useEffect(() => {
		getPersonajes()
		getPlanetas()
	}, [])


	return (
		<div className="m-5">
			<div className="mt-5">
				<h1 className="container">Personajes</h1>
				<div className="d-flex overflow-x-scroll gap-3 border p-2 container">
					{store.personajes.map((personaje) => (
						<Card name={personaje.name} uid={personaje.uid} key={personaje.uid} cardType="personaje" />
					))}
				</div>
			</div>

			<div className="mt-5">
				<h1 className="container">Planetas</h1>
				<div className="d-flex overflow-x-scroll gap-3 border p-2 container">
					{store.planetas.map((planeta) => (
						<Card name={planeta.name} uid={planeta.uid} key={planeta.uid}  cardType="planeta"/>
					))}
				</div>
			</div>
		</div>
	);
}; 