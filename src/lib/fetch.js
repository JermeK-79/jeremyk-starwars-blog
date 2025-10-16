const baseURL = 'https://swapi.tech/api/';

export const fetchAllPeople = async(dispatch) => {
    try{
        const response = await fetch(`${baseURL}/people`);
        if(!response.ok){
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedAllPeople',
            payload: data.results,
        })
        return data;
    }
    catch (error)
    {
        console.error("Error getting Star Wars character profiles!", error)
    }
}
export const fetchSinglePerson = async(useId,dispatch) => {
    try {
        const response = await fetch(`${baseURL}/people/${uid}`);

        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedSinglePerson',
            payload: data.results.properties,
        })
        return data;
    }
    catch (error) {
        console.error("Error getting Star Wars person profile!", error)
    }
}

export const fetchAllPlanets = async() => {}
export const fetchAllVehicles = async() => {}