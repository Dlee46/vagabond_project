import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import CityHomePage from './components/CityHomePage';
import NewPost from './components/NewPost';
import PostHomePage from './components/PostHomePage';



class App extends Component {
  render() {
    const HomePageWrapper = (props) => {
      return (
        <HomePage {...props} />
      )
    }

    const CityHomePageWrapper = (props) => {
      return (
        <CityHomePage {...props} />
      )
    }
    const PostsNewWrapper = (props) => {
      return (
        <NewPost {...props} />
      )
    }
    const PostPageWrapper = (props) => {
      return (
        <PostHomePage {...props} />
      )
    }

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' render={HomePageWrapper} />
            <Route exact path='/cities/:id' render={CityHomePageWrapper} />
            <Route exact path='/cities/:id/posts/new/' render={PostsNewWrapper} />
            <Route exact path='/cities/:cityid/posts/:id' render={PostPageWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
