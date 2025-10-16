import {Link} from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { fetchSinglePerson } from "../lib/fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PeopleProfilePage = () => {
   const {store, dispatch} = useGlobalReducer();
   const {uid} = useParams;

   useEffect (() => {
        fetchSinglePerson(parseInt(uid), dispatch)
   }, [])
    return (
  <>
    <div className="container">
      {store.singlePerson.map(demographic => {
        return (
          <div key={demographic.id}>
            {demographic.name}
          </div>
        );
      })}
    </div>
  </>
);
}