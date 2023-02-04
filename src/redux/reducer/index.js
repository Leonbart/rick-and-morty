import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER, RESET_FAV_FILTERS } from "../actions/types.js";

const initialState = {
    myFavorites: [],    // Selected favorite characters
    allCharacters: [],  // All favorite characters
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.allCharacters, payload],
            }
        case DELETE_FAVORITE:
            const newFarorites = state.myFavorites.filter(
                favChar => favChar.id !== payload);
            const newAllCharacters = state.allCharacters.filter(
                favChar => favChar.id !== payload);
            return {
                ...state,
                myFavorites: newFarorites,
                allCharacters: newAllCharacters,
            }
            case ORDER:
                const ordered = [...state.myFavorites];
                ordered.sort((a, b) => a.id - b.id);
                if (payload !== 'ASC') ordered.reverse();
                return {
                    ...state,
                    myFavorites: [...ordered],
                }
            case FILTER:
                const filteredByGender = state.allCharacters.filter(char => char.gender === payload);
                return {
                    ...state,
                    myFavorites: [...filteredByGender],
                }
            case RESET_FAV_FILTERS:
                return {
                    ...state,
                    myFavorites: [...state.allCharacters],
                }
        default:
            return state
    }
}

export default rootReducer;