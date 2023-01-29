import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./types";

export function addFavorite(favChar) {
    return {
        type: ADD_FAVORITE,
        payload: favChar
    }
}

export function deleteFavorite(id) {
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