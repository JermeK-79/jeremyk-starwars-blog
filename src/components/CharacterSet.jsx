import { CharacterCard } from "./CharacterCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterSet = ({ allPeople, dispatch }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    allPeople.map(person => {
                        return(
                            <CharacterCard 
                                key={person.uid}
                                uid={person.uid}
                                name={person.name}
                                dispatch={dispatch}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}