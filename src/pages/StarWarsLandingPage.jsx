import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CharacterSet } from "../components/CharacterSet";
import { PlanetSet } from "../components/PlanetSet";
import { VehicleSet } from "../components/VehicleSet";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch";

export const StarWarsLandingPage = () => {
  const {store, dispatch} = useGlobalReducer();
  
  useEffect(() => {
    fetchAllPeople(dispatch);
    fetchAllPlanets(dispatch);
    fetchAllVehicles(dispatch);
  }, []);
  
  return (
    <div style={{
      background: 'url("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013") center/cover fixed',
      minHeight: '100vh',
      paddingBottom: '3rem'
    }}>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="person-group mb-5">
            <h1 className="text-info border-dark">Characters</h1>
            <CharacterSet 
              allPeople={store.allPeople}
              dispatch={dispatch}
            />
          </div>
          
          <div className="planet-group mb-5">
            <h1 className="text-info border-dark">Planets</h1>
            <PlanetSet 
              allPlanets={store.allPlanets}
              dispatch={dispatch}
            />
          </div>
          
          <div className="vehicle-group mb-5">
            <h1 className="text-info border-dark">Vehicles</h1>
            <VehicleSet 
              allVehicles={store.allVehicles}
              dispatch={dispatch}
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}