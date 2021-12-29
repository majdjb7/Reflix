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
                    <input type="text" placeholder="Search" />
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