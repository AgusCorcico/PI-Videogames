import axios from 'axios';

const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
const FILTER_BY_GENRES = 'FILTER_BY_GENRES';
const GET_GENRE = 'GET_GENRE';
const FILTER_CREATED = 'FILTER_CREATED';
const ORDER_BY_NAME = 'ORDER_BY_NAME';
const ORDER_BY_RATING = 'ORDER_BY_RATING';
const GET_VIDEOGAME_BY_NAME = 'GET_VIDEOGAME_BY_NAME';
const GET_VIDEOGAME_DETAILS = 'GET_VIDEOGAME_DETAILS';


export function getVideogames(){
    return async function(dispatch){
        /* por default axios hace el get, pero me gusta ponerlo */
        let json = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: json.data
        })
    }
}

export function getNameVideogames(name){
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3001/videogames?name=" + name)
            return dispatch({
                type: GET_VIDEOGAME_BY_NAME,
                payload: json.data
        })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getGenres(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/genres")
        return dispatch({
            type: GET_GENRE,
            payload: json.data
        })
    }
}

export function postVideogame(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/videogame", payload) /* porque viene con la info de creacion */
        return response;
    }
}
export function filterVideogamesByGenres(payload) {
    return {
        type: FILTER_BY_GENRES,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByRating(payload){
    return{
        type: ORDER_BY_RATING,
        payload
    }
}

export function getVideogameDetails(id){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/videogames/"+id);
            return dispatch({
                type: GET_VIDEOGAME_DETAILS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}