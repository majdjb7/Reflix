import React, { Component } from 'react'

class Movie extends Component {
    render() {
        // const { fentities, name } = this.props.match.params
        console.log(this.props.match);
        return (
            <div>
                <button>Add</button>
                <h1>Movie</h1>

            </div>
        )
    }
}

export default Movie