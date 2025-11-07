import { PlanetCard } from "./PlanetCard";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useRef } from "react";

export const PlanetSet = ({ allPlanets, dispatch }) => {
  const { store } = useGlobalReducer();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="position-relative">
      <button 
        className="btn btn-dark position-absolute start-0 top-50 translate-middle-y" 
        style={{ zIndex: 10 }}
        onClick={scrollLeft}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
      </button>

      <div 
        ref={scrollRef}
        className="row d-flex flex-nowrap overflow-auto"
      >
        {allPlanets.map(planet => {
          return (
            <PlanetCard 
              key={planet.uid}
              uid={planet.uid}
              name={planet.name}
              population={planet.population}
              terrain={planet.terrain}
              dispatch={dispatch}
              isFavorited={store.favorites?.some(fav => fav.uid === planet.uid && fav.type === 'planets')}
            />
          )
        })}
      </div>

      <button 
        className="btn btn-dark position-absolute end-0 top-50 translate-middle-y" 
        style={{ zIndex: 10 }}
        onClick={scrollRight}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </button>
    </div>
  );
}