const baseURL = 'https://swapi.tech/api';

export const fetchAllPeople = async(dispatch) => {
  try {
    const response = await fetch(`${baseURL}/people`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const peopleWithDetails = await Promise.all(
      data.results.map(async (person) => {
        const detailResponse = await fetch(`${baseURL}/people/${person.uid}`);
        const detailData = await detailResponse.json();
        return {
          uid: person.uid,
          name: person.name,
          ...detailData.result.properties
        };
      })
    );
    dispatch({
      type: 'fetchedAllPeople',
      payload: peopleWithDetails,
    })
    return peopleWithDetails;
  }
  catch (error) {
    console.error("Error getting Star Wars character profiles!", error)
  }
}

export const fetchSinglePerson = async(uid, dispatch) => {
  try {
    const response = await fetch(`${baseURL}/people/${uid}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    dispatch({
      type: 'fetchedSinglePerson',
      payload: data.result.properties,
    })
    return data;
  }
  catch (error) {
    console.error("Error getting Star Wars person profile!", error)
  }
}

export const fetchAllPlanets = async(dispatch) => {
  try {
    const response = await fetch(`${baseURL}/planets`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const planetsWithDetails = await Promise.all(
      data.results.map(async (planet) => {
        const detailResponse = await fetch(`${baseURL}/planets/${planet.uid}`);
        const detailData = await detailResponse.json();
        return {
          uid: planet.uid,
          name: planet.name,
          ...detailData.result.properties
        };
      })
    );
    dispatch({
      type: 'fetchedAllPlanets',
      payload: planetsWithDetails,
    })
    return planetsWithDetails;
  }
  catch (error) {
    console.error("Error getting Star Wars planets!", error)
  }
}

export const fetchSinglePlanet = async(uid, dispatch) => {
  try {
    const response = await fetch(`${baseURL}/planets/${uid}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    dispatch({
      type: 'fetchedSinglePlanet',
      payload: data.result.properties,
    })
    return data;
  }
  catch (error) {
    console.error("Error getting Star Wars planet profile!", error)
  }
}

export const fetchAllVehicles = async(dispatch) => {
  try {
    const response = await fetch(`${baseURL}/vehicles`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const vehiclesWithDetails = await Promise.all(
      data.results.map(async (vehicle) => {
        const detailResponse = await fetch(`${baseURL}/vehicles/${vehicle.uid}`);
        const detailData = await detailResponse.json();
        return {
          uid: vehicle.uid,
          name: vehicle.name,
          ...detailData.result.properties
        };
      })
    );
    dispatch({
      type: 'fetchedAllVehicles',
      payload: vehiclesWithDetails,
    })
    return vehiclesWithDetails;
  }
  catch (error) {
    console.error("Error getting Star Wars vehicles!", error)
  }
}

export const fetchSingleVehicle = async(uid, dispatch) => {
  try {
    const response = await fetch(`${baseURL}/vehicles/${uid}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    dispatch({
      type: 'fetchedSingleVehicle',
      payload: data.result.properties,
    })
    return data;
  }
  catch (error) {
    console.error("Error getting Star Wars vehicle profile!", error)
  }
}