import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homeState: ""
        }
    }

    updateData() {
        const data = {
            'userID': '2234',
            'id': '2223',
            'title': 'Okay dexter New',
            'body': 'quia et suscipit recusandaet'
        }
    axios.put('https://jsonplaceholder.typicode.com/posts/1',
    data)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

    delData() {
            const data = {
                'userID': '2234',
                'id': '2223',
                'title': 'Okay dexter New',
                'body': 'quia et suscipit recusandaet'
            }
        axios.delete('https://jsonplaceholder.typicode.com/posts/1',
        data)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
    <div className='topbarCenter'>
        <h1>Home Page</h1>
        <p>Welcome</p>
        <button onClick={this.updateData}>Update</button>
        <button onClick={this.delData}>Delete</button>
    </div>
        )
    }
}

export default Home