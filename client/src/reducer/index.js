
const initialState = {
    videogames : [],
    genres:[],
    allVideogames:[],
    details: [],
    

} 

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_VIDEOGAMES':
            return{ 
                ...state,
                videogames: action.payload,
                allVideogames:  action.payload
            }
        case 'GET_VIDEOGAME_BY_NAME':
            return{
                ...state,
                videogames: action.payload
            }
        case 'GET_GENRE':
            return{
                ...state,
                genres: action.payload
            }
        case 'FILTER_BY_GENRES':
            const allVideogames = state.allVideogames
            const genresFiltered = action.payload === 'Genres' ? allVideogames 
                : allVideogames.filter(el=>el.genres.find(e => e=== action.payload))
            return{
                ...state,
                videogames: genresFiltered
            }
        case 'POST_VIDEOGAME':
            return{
                ...state
            }
        case 'FILTER_CREATED':
            const all = state.allVideogames;
            const created = action.payload === 'Created' ? all.filter(el => el.createdInDb) 
                : all.filter(e=> !e.createdInDb)
            return{
                ...state,
                videogames: action.payload === 'All' ? all : created
            }
        case 'ORDER_BY_NAME':
            let arrSort = action.payload === 'Asc' ?
                state.videogames.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                }) :
                state.videogames.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
                return{
                ...state,
                videogames: arrSort
            }
        case 'ORDER_BY_RATING':
            let arrSortRating = action.payload === 'High' ?
                state.videogames.sort(function(a,b){
                    if(a.rating > b.rating) {
                        return -1;
                    }
                    if(b.rating > a.rating) {
                        return 1;
                    }
                    return 0;
                }) :
                state.videogames.sort(function(a,b){
                    if(a.rating > b.rating) {
                        return 1;
                    }
                    if(b.rating > a.rating) {
                        return -1;
                    }
                    return 0;
                })
            return{
                ...state,
                videogames: arrSortRating
            } 
        case 'GET_VIDEOGAME_DETAILS':
            return{
                ...state,
                details: action.payload
            }
        default: return state;
    } 
};

export default rootReducer;