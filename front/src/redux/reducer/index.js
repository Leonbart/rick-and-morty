import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER, RESET_FAV_FILTERS, GET_FAVORITES, DELETE_FAVORITES } from "../actions/types.js";

const initialState = {
    selectedFavorites: [],    // Selected favorite characters
    allFavorites: [],  // All favorite characters
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITE:  // Add a character to selectedFavorites and allFavorites
            return {
                ...state,
                selectedFavorites: [...state.selectedFavorites, payload],
                allFavorites: [...state.allFavorites, payload],
            }
        case DELETE_FAVORITE:   // Delete a character from selectedFavorites and allFavorites
            const newFarorites = state.selectedFavorites.filter(
                favChar => favChar.id !== payload);
            const newallFavorites = state.allFavorites.filter(
                favChar => favChar.id !== payload);
            return {
                ...state,
                selectedFavorites: newFarorites,
                allFavorites: newallFavorites,
            }
        case ORDER:     // Order selectedFavorites ascending or descending
            const ordered = [...state.selectedFavorites];
            ordered.sort((a, b) => a.id - b.id);
            if (payload !== 'ASC') ordered.reverse();
            return {
                ...state,
                selectedFavorites: [...ordered],
            }
        case FILTER:    // Filter selectedFavorites by gender
            const filteredByGender = state.allFavorites.filter(char => char.gender === payload);
            return {
                ...state,
                selectedFavorites: [...filteredByGender],
            }
        case RESET_FAV_FILTERS:     // selectedFavorites <--- allFavorites
            return {
                ...state,
                selectedFavorites: [...state.allFavorites],
            }
        case GET_FAVORITES:  // selectedFavorites <--- allFavorites <--- BACK-END
            return {
                ...state,
                selectedFavorites: payload,
                allFavorites: payload,
            }
        case DELETE_FAVORITES:   // Reset favorites from both selectedFavorites and allFavorites
        default:
            return initialState
    }
}

export default rootReducer;