 export const addMovie=(movieObj)=>{
    return {
        type:'ADD_MOVIE',
        payload:movieObj
    }
}

export const deleteMovie=(movieId)=>{
    return {
        type:'DELETE_MOVIE',
        payload:movieId
    }
}

export const ascending=()=>{
    return {
        type:'ASCENDING'
    }
}

export const descending=()=>{
    return {
        type:'DESCENDING'
    }
}

export const ascendingNum=()=>{
    return {
        type:'ASCENDING_NUM'
    }
}

export const descendingNum=()=>{
    return {
        type:'DESCENDING_NUM'
    }
}

export const reverseString=(str)=>{
    return {
        type:'REVERSE_STRING',
        payload:str
    }
}

