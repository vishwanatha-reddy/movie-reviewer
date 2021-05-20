import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import MovieCard from './MovieCard';

import {ascending,ascendingNum, descending,descendingNum} from '../../actions/moviesAction';

const MoviesList=(props)=> {
    const [term,setTerm]=useState('');
    const [sortValue,setSortValue]=useState('');

    const dispatch=useDispatch();

    const moviesData=useSelector((state)=>{
        return state.movies;
    })

    const handleSearch=(e)=>{
        setTerm(e.target.value);
        }
        
    const searchedMovies=()=>{
        return moviesData.filter((movieEle)=>{
            return movieEle.movie.includes(term);   
        })}

    const handleSortChange=(e)=>{
        const result=e.target.value;
        // console.log(result);
        setSortValue(result);

        if(result==='ascending'){
             dispatch(ascending());
        }else if(result==='descending'){
             dispatch(descending());
        }else if(result==='ascendingNum'){
             dispatch(ascendingNum());
        }else if(result==='descendingNum'){
             dispatch(descendingNum());
        }
    }

    return (
        <div className="row">
            <input className="col-md-8 ms-3 shadow p-3 mb-5 bg-body rounded" type="text" value={term} onChange={handleSearch} placeholder="search by name..."/> <br/>

            <select  onChange={handleSortChange} className="col-md-2 shadow p-3 mb-5 bg-body rounded ms-3" value={sortValue}>
                <option value="">order by</option>
                <option value="ascending">A-Z</option>
                <option value="descending">Z-A</option>
                <option value="ascendingNum">1-10</option>
                <option value="descendingNum">10-1</option>
            </select>

            <div className="row">
                {searchedMovies().map((movieItem)=>{  
                    return <MovieCard key={movieItem.id} {...movieItem}/>
                })}     
            </div>
            
        </div>
    )
}

export default MoviesList
