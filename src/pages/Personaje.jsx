// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import { useEffect, useState } from "react";
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state

// Define and export the Personaje component which displays individual item details.
export const Personaje = props => {
  // Retrieve the 'theId' URL parameter using useParams hook.
  const { theId } = useParams()

  const [personaje, setPersonaje] = useState([])

  function getPersonaje() {
    fetch(`https://www.swapi.tech/api/people/${theId}`)
      .then(res => res.json())
      .then(data => {
        setPersonaje(data.result)
      })
      .catch(error => {
        console.log(error)
        setPersonaje([])
      })
  }

  useEffect(() => {
    getPersonaje()
  }, [])



  return (
    <div className="container">
      {personaje.length != 0 ? (
        <>
          <div className="row">
            <div className="col">
              <img src={rigoImageUrl} width={"500px"} />
            </div>

            <div className="col text-center">
              <h1>{personaje.properties.name}</h1>
              <p className="fs-3 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptatum consequatur optio facilis? Facere quasi sit porro quaerat tempora quam! Commodi illum quibusdam aut molestiae iure. Ducimus, quia iste.</p>
            </div>
          </div>
          <hr className="my-5 text-danger" />
          <div className="row mb-3">
            <div className="col text-danger text-center"><h2>Name</h2> <h5>{personaje.properties.name}</h5></div>
            <div className="col text-danger text-center"><h2>Birth Year</h2> <h5>{personaje.properties.birth_year}</h5></div>
            <div className="col text-danger text-center"><h2>Gender</h2> <h5>{personaje.properties.gender}</h5></div>
            <div className="col text-danger text-center"><h2>Height</h2> <h5>{personaje.properties.height}</h5></div>
            <div className="col text-danger text-center"><h2>Skin Color</h2> <h5>{personaje.properties.skin_color}</h5></div>
            <div className="col text-danger text-center"><h2>Eye Color</h2> <h5>{personaje.properties.eye_color}</h5></div>
          </div>
        </>

      ) : (
        <div className="row">
          <div className="col">
            <img src={rigoImageUrl} width={"500px"} />
          </div>
          <div className="col text-center">
            <h1>Cargando...</h1>
            <p>Cargando...</p>
          </div>
          <hr className="my-5 text-danger" />
          <div className="row mb-3">
            <div className="col text-danger text-center"><h2>Name</h2> <h5>Cargando...</h5></div>
            <div className="col text-danger text-center"><h2>Birth Year</h2> <h5>Cargando...</h5></div>
            <div className="col text-danger text-center"><h2>Gender</h2> <h5>Cargando...</h5></div>
            <div className="col text-danger text-center"><h2>Height</h2> <h5>Cargando...</h5></div>
            <div className="col text-danger text-center"><h2>Skin Color</h2> <h5>Cargando...</h5></div>
            <div className="col text-danger text-center"><h2>Eye Color</h2> <h5>Cargando...</h5></div>
          </div>
        </div>)}
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Personaje.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
