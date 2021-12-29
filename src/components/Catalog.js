import React, { Component } from 'react'
import Movie from './Movie'
import '../styles/catalog.css'

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            movieName: ""
        }
    }

    makeRented = (movie) => {
        this.props.makeRented(movie)

    }

    searchMovie = () => {
        alert(`Movie: ${this.state.movieName}`)
    }

    handleInputChange = event => {
        const {value, name} = event.target;   
        this.setState({[name]: value})
    }

    isMovieValid = () => {

    }

    filterMovies = (movies) => {
        let searchResult = (this.state.movieName).toLowerCase()
        let newMovies = movies.filter(m => (m.title).toLowerCase().includes(searchResult))
        return newMovies
    }

    render() {
        let movies = this.props.state.movies
        if(this.state.movieName !== "") {
            let newMovies = this.filterMovies(movies)
            movies = newMovies
        }
        let rentedMovies = movies.filter(m => m.isRented === true)
        let availableMovies = movies.filter(m => m.isRented === false)
        return (
            <div>
                {rentedMovies.length>0
                    ?
                    <div className='rented'>
                        <h1>Rented:</h1>
                        <div className='movies-container'>
                            {rentedMovies.map(m => { return (<Movie key={m.id} makeRented={this.makeRented} movie={m}/> ) })
                            }
                        </div>
                    </div>
                    : <div></div>
                }
                
                
                <div id="u-input">
                    <input type="text" name="movieName" placeholder="Search" onChange={this.handleInputChange}/>
                </div>

                <div className='movies-container'>
                    {availableMovies.map(m => { return (<Movie key={m.id} makeRented={this.makeRented} movie={m}/> )})
                    }
                </div>
            </div>
        )
    }
}

export default Catalog