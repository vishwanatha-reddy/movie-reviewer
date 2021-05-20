import React from 'react'
import {useDispatch} from 'react-redux'
import { FaTrash } from 'react-icons/fa';



import {deleteMovie} from '../../actions/moviesAction'
import movieReel from '../../images/movieReel.jpg'

const MovieCard=(props)=> {
    
    const {id,movie,rank}=props;

    
    const dispatch=useDispatch();

    const removeMovie=()=>{
      const confirmation=window.confirm("Please confirm movie removal");
            if(confirmation){
              dispatch(deleteMovie(id))
            }
    }

    return (
        <div className="card col-md-5 m-3 shadow p-3 mb-5 bg-body rounded" >
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={movieReel} style={{width:'8rem',height:'8rem'}} alt="image"/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{movie}</h5>
                      <h5 className="card-title">#{rank}</h5>
                        <div className="mt-6">
                          <button  style={{marginLeft:'6rem'}} onClick={removeMovie}><FaTrash/></button>
                      </div>
                  </div>
                </div>
            </div>
        </div> 
        
    )
}

export default MovieCard
