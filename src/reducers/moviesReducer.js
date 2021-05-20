import  _ from 'lodash'

const moviesInitialState=[];

const moviesReducer=(state=moviesInitialState,action)=>{
    
    switch(action.type){
        case 'ADD_MOVIE':{
            return [...state,{...action.payload}]
        }

        case 'DELETE_MOVIE':{
                return state.filter((movie)=>movie.id!==action.payload)
        }

        case 'ASCENDING_NUM':{

            return _.orderBy(state, ['rank'], ['asc']);
        }

        case 'DESCENDING_NUM':{
            return _.orderBy(state, ['rank'], ['desc']);
        }

        case 'ASCENDING':{
            return _.orderBy(state, ['movie'], ['asc']);
        }

        case 'DESCENDING':{
            return _.orderBy(state, ['movie'], ['desc']);
        }

        case 'REVERSE_STRING':{
            return [...state,{...action.payload}]
        }

        default:{
            return [...state];
        }
    }

}

export default moviesReducer