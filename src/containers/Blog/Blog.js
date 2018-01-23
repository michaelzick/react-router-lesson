import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        console.log(this.props);
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to='/'
                                    activeClassName='blog-active'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName='blog-active'
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                                    }}>
                                    New Post
                                </NavLink>
                            </li>
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
                <Route
                    path='/:id'
                    component={FullPost}
                    exact
                />
            </div>
        );
    }
}

export default withRouter(Blog);
