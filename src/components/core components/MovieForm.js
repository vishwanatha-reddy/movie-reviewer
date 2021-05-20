import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { v4 as uuidv4} from 'uuid';


import {addMovie} from '../../actions/moviesAction'

const MovieForm=(props)=> {

    const [movie,setMovie]=useState('');
    const [rank,setRank]=useState('');

    const dispatch=useDispatch();

    const handleMovieEntered=(e)=>{
        const result=e.target.value;
        if(result.length>10){
            alert(' please enter a movie name less than 10 characters')
        }else{
            setMovie(result);
        }
       
    }

    const handleRankEntered=(e)=>{
    const result=e.target.value;
        
       if(parseFloat(result)>10){
           alert('please enter rating less than or equal to 10');
           setRank('');
       }else{    
            setRank(result);
       }   

    }

   //clearing input fields after dispatch
   const clearSearch=()=>{
       setRank('');
       setMovie('');
   }

   const handleSubmit=(e)=>{
       e.preventDefault();
       const movieObj={
           id:uuidv4(),
           movie,
           rank:Number(rank)
       }
       //dispatch add movie action with movie object
       dispatch(addMovie(movieObj));
       clearSearch();
   }

    return (
        <div className="container">
            <h3 className="shadow p-3 mb-5 bg-body rounded">Add Movie</h3>

            <form onSubmit={handleSubmit} className="shadow p-3 mb-5 bg-body rounded">

                <input type="text" value={movie} onChange={handleMovieEntered} className="my-2 mt-5 ms-4 shadow p-3 mb-5 bg-body rounded" style={{width:'18rem'}} placeholder="Enter movie name"/><br/>

                <input type="text" value={rank} className="shadow p-3 mb-5 ms-4 bg-body rounded" onChange={handleRankEntered} style={{width:'18rem'}} placeholder="IMDB Ranking"/><br/>

                <input type="submit" value="Add" style={{marginLeft:'15rem'}} className="mt-2  btn btn-primary btn-lg"/>
            </form>
        </div>
    )
}

export default MovieForm
