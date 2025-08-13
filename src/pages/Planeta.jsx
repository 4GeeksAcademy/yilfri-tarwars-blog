// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import { useEffect, useState } from "react";
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state

// Define and export the planeta component which displays individual item details.
export const Planeta = props => {
  // Retrieve the 'theId' URL parameter using useParams hook.
  const { theId } = useParams()

  const [planeta, setPlaneta] = useState([])

  function getplaneta() {
    fetch(`https://www.swapi.tech/api/planets/${theId}`)
      .then(res => res.json())
      .then(data => {
        setPlaneta(data.result)
        console.log(data)
      })
      .catch(error => {
        console.log(error)

      })
  }

  useEffect(() => {
    getplaneta()
  }, [])


  return (
      <div className="container">
        {planeta.length != 0 ? (
          <>
            <div className="row">
              <div className="col">
                <img src={rigoImageUrl} width={"500px"} />
              </div>
  
              <div className="col text-center">
                <h1>{planeta.properties.name}</h1>
                <p className="fs-3 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam voluptatum consequatur optio facilis? Facere quasi sit porro quaerat tempora quam! Commodi illum quibusdam aut molestiae iure. Ducimus, quia iste.</p>
              </div>
            </div>
            <hr className="my-5 text-danger" />
            <div className="row mb-3">
              <div className="col text-danger text-center"><h2>Name</h2> <h5>{planeta.properties.name}</h5></div>
              <div className="col text-danger text-center"><h2>Gravity</h2> <h5>{planeta.properties.gravity}</h5></div>
              <div className="col text-danger text-center"><h2>Climate</h2> <h5>{planeta.properties.climate}</h5></div>
              <div className="col text-danger text-center"><h2>Orbital Period</h2> <h5>{planeta.properties.orbital_period}</h5></div>
              <div className="col text-danger text-center"><h2>Population</h2> <h5>{planeta.properties.population}</h5></div>
              <div className="col text-danger text-center"><h2>Terrain</h2> <h5>{planeta.properties.terrain}</h5></div>
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
              <div className="col text-danger text-center"><h2>Gravity</h2> <h5>Cargando...</h5></div>
              <div className="col text-danger text-center"><h2>Climate</h2> <h5>Cargando...</h5></div>
              <div className="col text-danger text-center"><h2>Orbital Period</h2> <h5>Cargando...</h5></div>
              <div className="col text-danger text-center"><h2>Population</h2> <h5>Cargando...</h5></div>
              <div className="col text-danger text-center"><h2>Terrain</h2> <h5>Cargando...</h5></div>
            </div>
          </div>)}
      </div>
    );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Planeta.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
