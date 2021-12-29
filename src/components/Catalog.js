import React, { Component } from 'react'
import Movie from './Movie'
import '../styles/catalog.css'

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            movieName: "",
        }
    }

    makeRented = (movie, userID) => {
        this.props.makeRented(movie, userID)
    }

    searchMovie = () => {
        alert(`Movie: ${this.state.movieName}`)
    }

    handleInputChange = event => {
        const {value, name} = event.target;   
        this.setState({[name]: value})
    }

    filterMovies = (movies) => {
        let searchResult = (this.state.movieName).toLowerCase()
        let newMovies = movies.filter(m => (m.title).toLowerCase().includes(searchResult))
        return newMovies
    }

    render() {
        let movies = this.props.state.movies
        let users = this.props.state.users
        let userID = this.props.match.params.userID
        let user = users.find(u => userID === u.name)

        if(this.state.movieName !== "") {
            let newMovies = this.filterMovies(movies)
            movies = newMovies
        }
        let rentedMovies = movies.filter(m => m.isRented === true)
        let availableMovies = movies.filter(m => m.isRented === false)
        return (
            <div>
                <div id="budget-container">
                    <div id="budget">Budget: ${user.budget}</div>
                </div>

                <div id="u-input">
                    <input type="text" name="movieName" placeholder="Search" onChange={this.handleInputChange}/>
                </div>

                

                {rentedMovies.length>0
                    ?
                    <div className='rented'>
                        <h1>Rented:</h1>
                        <div className='movies-container'>
                            {rentedMovies.map(m => { return (<Movie key={m.id} userID={user.id} makeRented={this.makeRented} movie={m}/> ) })
                            }
                        </div>
                    </div>
                    : <div></div>
                }
                <div className='for-rent'>
                    <h1>Catalog:</h1>
                    <div className='movies-container'>
                        {availableMovies.map(m => { return (<Movie key={m.id} userID={user.id} makeRented={this.makeRented} movie={m}/> )})
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog