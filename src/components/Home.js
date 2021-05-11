import React, { Component } from 'react'
import axios from 'axios'
import '../home.css'

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
    <div id='topbarCenter'>
        <h1 id='Logo'>PostBook</h1>
        <p id='para1'>Namastey!</p>
        <button id='button1' onClick={this.updateData}>Update</button>
        <button id='button2' onClick={this.delData}>Delete</button>
    </div>
        )
    }
}

export default Home