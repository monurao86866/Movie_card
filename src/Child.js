import React, { Component } from 'react'
import './syle.css'


export default class Child extends Component {
    render() {
        return (
            <div className="movie-item">
                <p className="a">{this.props.name}</p>
                <img src={this.props.image} />
            </div>
        )
    }
}
