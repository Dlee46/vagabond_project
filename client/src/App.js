import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import CityHomePage from './components/CityHomePage';
import NewPost from './components/NewPost';



class App extends Component {
  render() {
    const HomePageWrapper = (props) => (
      <HomePage {...props} />
    )

    const CityHomePageWrapper = (props) => {
      return (
        <CityHomePage {...props} />
      )
    }
    const PostsNewWrapper = (props) =>{
      return (
        <NewPost {...props}/>
      )
    }

    return ( 
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/cities/:id' render={CityHomePageWrapper}/>
            <Route exact path='/cities/:id/posts/new/' render={PostsNewWrapper}/> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
