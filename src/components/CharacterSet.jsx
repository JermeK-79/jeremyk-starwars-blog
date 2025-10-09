import { CharacterCard } from "./CharacterCard";

export const CharacterSet = ({ allPeople, dispatch }) => {
    return (
        <>
            <div className="row">
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