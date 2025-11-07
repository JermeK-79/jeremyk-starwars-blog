import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSinglePerson } from "../lib/fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PeopleProfilePage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();
  
  useEffect(() => {
    if (uid) {
      fetchSinglePerson(uid, dispatch);
    }
  }, [uid]);
  
  return (
    <>
      <div className="container mt-5">
        {store.singlePerson ? (
          <div className="row">
            <div className="col-md-6">
              <img 
                src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`}
                className="img-fluid"
                alt={store.singlePerson.name}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            
            <div className="col-md-6">
              <h1 className="display-4">{store.singlePerson.name}</h1>
              <p className="lead mt-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi.
              </p>
              
              <hr style={{ borderTop: '2px solid #dc3545', marginTop: '2rem', marginBottom: '2rem' }} />
              
              <div className="row text-center">
                <div className="col-4">
                  <h6 className="text-danger">Name</h6>
                  <p className="text-danger">{store.singlePerson.name}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Birth Year</h6>
                  <p className="text-danger">{store.singlePerson.birth_year}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Gender</h6>
                  <p className="text-danger">{store.singlePerson.gender}</p>
                </div>
              </div>
              
              <div className="row text-center mt-3">
                <div className="col-4">
                  <h6 className="text-danger">Height</h6>
                  <p className="text-danger">{store.singlePerson.height}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Skin Color</h6>
                  <p className="text-danger">{store.singlePerson.skin_color}</p>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">Eye Color</h6>
                  <p className="text-danger">{store.singlePerson.eye_color}</p>
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