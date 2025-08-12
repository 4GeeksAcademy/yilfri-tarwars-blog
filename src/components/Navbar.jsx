import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos ({store.favoritos.length})
					</button>
					<ul className="dropdown-menu">
						{store.favoritos.map((favorito) => (
							<li key={favorito}><a className="dropdown-item" href="#">{favorito}</a></li>
						))}

					</ul>
				</div>
			</div>
		</nav>
	);
};