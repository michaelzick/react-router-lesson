import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import './Posts.css';

// import Axios from 'axios';
import Axios from '../../../Axios'; // from instance

class Posts extends Component {
    state = {
        posts: []
    };

    postClickHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    componentDidMount () {
        Axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Michael'
                    }
                });

                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render () {
        let posts = this.state.error ?
            <p style={{textAlign: 'center'}}>Something went wrong!</p> :
            this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postClickHandler(post.id)}
                    />
                );
            });

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;
