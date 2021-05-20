import React from 'react'

import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'

const MoviesContainer=(props)=> {
    return (
        <div className="container">
            
            <div className="row">

                <h1 className="mt-4  shadow p-3 mb-5 bg-body rounded" >My Big Movies List</h1>

                <div className="col-md-8 px-2">
                    <MoviesList/>
                </div>

                <div className="col-md-4">
                    <MovieForm/>
                    <MovieStats/>
                </div>
                
            </div>
        </div>
    )
}

export default MoviesContainer
