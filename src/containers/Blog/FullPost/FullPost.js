import React, { Component } from 'react';
import Axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
        error: false
    }

    componentDidMount () {
        console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.props.postId !== this.state.loadedPost.id)) {
                Axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        });
                    });
            }
        }
    }

    deletePostHander = (postId) => {
        Axios.delete('/posts/' + this.props.postId)
            .then(response => {
                this.setState({
                    loadedPost: response.data
                });
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHander}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;