import React, { Component } from 'react'
import Movie from './Movie'

class Catalog extends Component {
    render() {
        return (
            <div>
                <h1>Catalog:</h1>
                <Movie />
            </div>
        )
    }
}

export default Catalog