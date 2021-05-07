import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],

        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }
    
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div className='topbarLeft'>
                    <img src= "/assets/logo.png" alt="" className=
                'topbarImg'/>
               List of Posts 
               {
                   posts.length ?
                   posts.map(post => <div id='Logo'
                    key=
                    {post.id}>{post.title}</div>) :
                    null
               }
               { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList