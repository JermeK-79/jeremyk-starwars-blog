export const initialStore = () => {
  return {
    allPeople: [],
    singlePerson: null, 
    allPlanets: [],
    singlePlanet: null, 
    allVehicles: [],
    singleVehicle: null, 
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type) {
    case 'fetchedAllPeople':
      {
        const peopleArray = action.payload;
        return {
          ...store,
          allPeople: [...peopleArray],
        }
      }
    case 'fetchedSinglePerson':
      {
        const personObj = action.payload;
        return {
          ...store,
          singlePerson: personObj
        }
      }
    case 'fetchedAllPlanets':
      {
        const planetsArray = action.payload;
        return {
          ...store,
          allPlanets: [...planetsArray],
        }
      }
    case 'fetchedSinglePlanet':
      {
        const planetObj = action.payload;
        return {
          ...store,
          singlePlanet: planetObj
        }
      }
    case 'fetchedAllVehicles':
      {
        const vehiclesArray = action.payload;
        return {
          ...store,
          allVehicles: [...vehiclesArray],
        }
      }
    case 'fetchedSingleVehicle':
      {
        const vehicleObj = action.payload;
        return {
          ...store,
          singleVehicle: vehicleObj
        }
      }
    case 'favedProfile':
  {
    const { uid, name, type } = action.payload;
    const exists = store.favorites.some(profile => profile.uid === uid && profile.type === type);
    
    if (exists) {
      return {
        ...store,
        favorites: store.favorites.filter(fav => !(fav.uid === uid && fav.type === type))
      }
    } else {
      return {
        ...store,
        favorites: [...store.favorites, {uid: uid, name: name, type: type}]
      }
    }
  }
    case 'removedFavorite':
  {
    const { uid, type } = action.payload;
    const filteredArray = store.favorites.filter(favorite => !(favorite.uid === uid && favorite.type === type));
    return {
      ...store,
      favorites: [...filteredArray]
    }    
  }
    default:
      throw Error('Unknown action.');
  }    
}