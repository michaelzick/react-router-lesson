import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render () {
        console.log(this.props);
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/new-post'>New Post</Link></li>
                            {/*<li><Link to={{
                                pathname: this.props.match.url + '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>*/}
                        </ul>
                    </nav>
                </header>
                <Route
                    path='/'
                    component={Posts}
                    exact
                />
                <Route
                    path='/new-post'
                    component={NewPost}
                />
            </div>
        );
    }
}

export default withRouter(Blog);
