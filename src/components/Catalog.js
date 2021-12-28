import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Movie from './Movie'
import '../styles/catalog.css'

class Catalog extends Component {

    makeRented = (movie) => {
        this.props.makeRented(movie)

    }

    render() {
        const movies = this.props.state.movies
        let rentedMovies = movies.filter(m => m.isRented === true)
        let availableMovies = movies.filter(m => m.isRented === false)
        console.log("RENTED: ",rentedMovies)
        console.log("AVAILABLE: ",availableMovies)
        return (
            <div>
                <div className='rented'>
                    <h1>Rented:</h1>
                    <div className='movies-container'>
                    {rentedMovies.map(m => {
                        return (
                                <div className="movie-container">
                                    <button>-</button>
                                    <Link to={`/movies/${m.id}`}>
                                        <img className='movie-img' src={m.img} alt="" />
                                    </Link>
                                    {/* <span>{}</span> */}
                                </div>
                        )
                    })
                    }
                </div>

                </div>
                <h1>Catalog:</h1>
                <div id="u-input">
                    <input type="text" placeholder="Search" />
                </div>
                <div className='movies-container'>
                    {availableMovies.map(m => {
                        return (
                                <div className="movie-container">
                                    <button onClick={this.makeRented(m)}>+</button>
                                    <Link to={`/movies/${m.id}`}>
                                        <img className='movie-img' src={m.img} alt="" />
                                    </Link>
                                    {/* <span>{}</span> */}
                                </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Catalog