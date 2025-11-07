import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSinglePlanet } from "../lib/fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlanetProfilePage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();
  
  useEffect(() => {
    if (uid) {
      fetchSinglePlanet(uid, dispatch);
    }
  }, [uid]);
  
  return (
    <>
      <div className="container mt-5">
        {store.singlePlanet ? (
          <div className="row">
            <div className="col-md-6">
              <img 
                src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${uid}.jpg?raw=true`}
                className="img-fluid"
                alt={store.singlePlanet.name}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            
            <div className="col-md-6">
              <h1 className="display-4">{store.singlePlanet.name}</h1>
              <p className="lead mt-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                ipsam voluptatem quia voluptas sit aspernatur
              </p>
              
              <hr style={{ borderTop: '2px solid #dc3545', marginTop: '2rem', marginBottom: '2rem' }} />
              
              <div className="row text-center">
                <div className="col-4">
                  <h6 className="text-danger">Name</h6>
                  <p className="text-danger">{store.singlePlanet.name}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Climate</h6>
                  <p className="text-danger">{store.singlePlanet.climate}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Population</h6>
                  <p className="text-danger">{store.singlePlanet.population}</p>
                </div>
              </div>
              
              <div className="row text-center mt-3">
                <div className="col-4">
                  <h6 className="text-danger">Orbital Period</h6>
                  <p className="text-danger">{store.singlePlanet.orbital_period}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Rotation Period</h6>
                  <p className="text-danger">{store.singlePlanet.rotation_period}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Diameter</h6>
                  <p className="text-danger">{store.singlePlanet.diameter}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
}