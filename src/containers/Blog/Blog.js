import React, { Component } from 'react';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom';

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
                            <li>
                                <NavLink
                                    exact
                                    to='/posts/'
                                    activeClassName='blog-active'>
                                    Posts
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

                <Switch>
                    <Route
                        path='/new-post'
                        component={NewPost}
                        exact
                    />
                    <Route
                        path='/posts/'
                        component={Posts}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Blog);
