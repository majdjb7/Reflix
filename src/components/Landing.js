import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {
        console.log(this.props.state.users)
        let usersArray = this.props.state.users
        return (
            <div>
                <h1 id="watch-title">Who's Watching</h1>
                <div className='users-container'>
                    {usersArray.map(u => {
                        return (
                            <Link to={`/catalog`}>
                                <div className="user-container">
                                    <img className='user-img' src={u.img} alt="" />
                                    <h1 className='user-name'>{u.name}</h1>
                                </div>
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Landing