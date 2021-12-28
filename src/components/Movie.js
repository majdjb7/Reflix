import React, { Component } from 'react'

class Movie extends Component {
    render() {
        console.log(this.props.movie);
        return (
            <div>
                <button>Add</button>
                <h1>Movie</h1>

            </div>
        )
    }
}

export default Movie