import React, { Component } from 'react'
import '../styles/movieDetail.css'

class MovieDetail extends Component {
    render() {
        let movieID = this.props.match.params.movieID
        let movie = this.props.state.movies[movieID]
        return (
            <div>
                <div className='movie-title'>{movie.title}</div>
                <div className='movie-year'>{movie.year}</div>
                <div className='img-wrapper'>
                    <img className='movie-img' src={movie.img} alt="" />
                </div>
                <div className='movie-desc'>{movie.descrShort}</div>
            </div>
        )
    }
}

export default MovieDetail