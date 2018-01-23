import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import {Route} from 'react-router-dom';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

// import Axios from 'axios';
import Axios from '../../../Axios'; // from instance

class Posts extends Component {
    state = {
        posts: []
    };

    // postClickHandler = (id) => {
    //     this.setState({
    //         selectedPostId: id
    //     });
    // }

    postClickHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
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
                    // <Link to={'/' + post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postClickHandler(post.id)}
                        />
                    // </Link>
                );
            });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route
                    path={this.props.match.url + '/:id'}
                    component={FullPost}
                    exact
                />
            </div>
        );
    }
}

export default Posts;
