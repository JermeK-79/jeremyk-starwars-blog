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
        const { uid, name } = action.payload;
        const exists = store.favorites.some(profile => profile.uid === uid);
        
        if (exists) {
          return {
            ...store,
            favorites: store.favorites.filter(fav => fav.uid !== uid)
          }
        } else {
          return {
            ...store,
            favorites: [...store.favorites, {uid: uid, name: name}]
          }
        }
      }
    case 'removedFavorite':
      {
        const {name} = action.payload;
        const filteredArray = store.favorites.filter(favorite => favorite.name !== name);
        return {
          ...store,
          favorites: [...filteredArray]
        }    
      }
    default:
      throw Error('Unknown action.');
  }    
}