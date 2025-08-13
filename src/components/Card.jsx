import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Card(props) {

  const {store, dispatch} = useGlobalReducer()

  return (
    <div className="border px-3 py-2">
      <img src={rigoImageUrl} width={"200px"} />
      <h3>{props.name}</h3>
      <p className="card-text">Identificador: {props.uid}</p>
      <div className="d-flex justify-content-between">
        <Link to={`/${props.cardType}/${props.uid}`} className="btn btn-outline-primary"> Conocer más </Link>
        <button style={store.favoritos.includes(props.name) ? { backgroundColor: "#ffc107" } : {}} className="btn btn-outline-warning" onClick={() => dispatch({type: "add_favoritos", payload: {nombre: props.name}})}>❤</button>
      </div>
    </div>
  );
}; 