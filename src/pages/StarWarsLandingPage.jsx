import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CharacterSet } from "../components/CharacterSet";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch";

export const StarWarsLandingPage = () => {
    const {store, dispatch} = useGlobalReducer();

    useEffect(() => {//fetchAllPeople();
    }, []);

    return (
        <>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="person-group">
                    <h1>Characters</h1>
                    <CharacterSet 
                    allPeople = {store.allPeople}
                    dispatch = {dispatch}
                    />
                </div>
                <div className="planet-group"></div>
                <div className="vehicle-group"></div>

            </div>
            <div className="col-1"></div>
        </div>
        </>
    );
}