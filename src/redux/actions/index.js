import { DELETE_FAVORITE, ADD_FAVORITE } from "./types";

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