import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from './action-types'

const initialState = {
    myFavorites: [],
    allCharactersFav: [],
}

const rootReducer = (state = initialState, { type, payload }) => {  // action = { type, payload } 
    switch( type ) {
        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharactersFav: payload };
      case REMOVE_FAV:
        return { ...state, myFavorites: payload        
     };
        case FILTER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            const allCharactersFiltered = allCharactersFavCopy.filter(character => 
            character.gender === payload)
            return {...state,
            myFavorites: 
                payload === 'allCharacters'
                ? [...state.allCharactersFav]
                : allCharactersFiltered
        }
        case ORDER:  
            let charactersCopy = [...state.myFavorites];
            if (payload === 'A') {
                charactersCopy.sort((a, b) => a.id - b.id)
            } else if (payload === 'D') {
                    charactersCopy.sort((a, b) => b.id - a.id)
                }
                return {
                    ...state,
                    myFavorites: charactersCopy
                }            
        
        default:
            return { ...state};
    }
}

export default rootReducer;