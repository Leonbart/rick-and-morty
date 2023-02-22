import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER, RESET_FAV_FILTERS } from "./types";
import axios from 'axios';

export function addFavorite(favChar) {
    // return async function (dispatch) {
    //     try {
    //         const { data } = await axios.post('http://localhost:3001/rickandmorty/fav', favChar);
    //         dispatch({
    //             type: ADD_FAVORITE,
    //             payload: data,
    //         })
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // }

    return {
        type: ADD_FAVORITE,
        payload: favChar
    }
}

export function deleteFavorite(id) {
    // return async function (dispatch) {
    //     try {
    //       await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    //       dispatch({
    //         type: DELETE_FAVORITE,
    //         payload: id,
    //       });
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    //   };

    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender,
    }
}
export function orderCards(order) { // order --> 'ASC' or 'DESC'
    return {
        type: ORDER,
        payload: order,
    }
}
export function resetFavFilters() {
    return {
        type: RESET_FAV_FILTERS,
        // payload: '',
    }
}