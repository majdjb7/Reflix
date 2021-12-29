import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movie.css'


class Movie extends Component {
    makeRented = () => {
        this.props.makeRented(this.props.movie, this.props.userID)
    
    }
    render() {
        const movie = this.props.movie
        let movieStatus = movie.isRented
        return (
            <div>
                {movieStatus === false ?
                                <div className="movie-container">
                                        <button onClick={this.makeRented}>+</button>
                                        <Link to={`/movies/${movie.id}`}>
                                            <img className='movie-img' src={movie.img} alt="" />
                                        </Link>
                                </div>
                                : <div className="movie-container">
                                    <button onClick={this.makeRented}>-</button>
                                        <Link to={`/movies/${movie.id}`}>
                                            <img className='movie-img' src={movie.img} alt="" />
                                        </Link>
                                </div>}
                

            </div>
        )
    }
}

export default Movie