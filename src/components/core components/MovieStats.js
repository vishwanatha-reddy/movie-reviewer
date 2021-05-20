import React from 'react'
import {useSelector} from 'react-redux';
import  _ from 'lodash'

const MovieStats=(props)=> {

    const moviesCount=useSelector((state)=>{
        return state.movies;
    })

    // const highestRatedMovie=()=>{
    //    const movieRatings=[];
    //     moviesCount.forEach((movie)=>{
    //          movieRatings.push(movie.movie);
    //     })
    //     return Math.min(...movieRatings);
    //     // console.log(movieRatings);
    // }
    const maxRatedMovies=()=>{
     const obj = _.maxBy(moviesCount, 'rank')
     console.log(obj);
     return `${obj.movie} - ${obj.rank}`
 }
    return (
        <div className="card mt-4 ms-4 shadow p-3 mb-5 bg-body rounded" style={{width: '23rem'}}>
             <div className="card-body">
                <h2 className="card-title">Movie Stats</h2>
                <h4 className="card-subtitle mb-2">Total Movies - {moviesCount.length}</h4>
                {/* <h4 className="card-title mb-2 "># {moviesCount.length>0?highestRatedMovie():'0'}</h4> */}
                <h4>#{moviesCount.length && maxRatedMovies()}</h4>
            </div>
        </div>
    )
}

export default MovieStats

