import React from 'react';
import './App.scss';
import Forum from './components/Forum';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';


class App extends React.Component {


  render() {
  return (
    <div >    
      <Switch>
          <Route exact path="/" render={() =>
              <React.Fragment>
                  <Home />
                  <Search />
                   
              </React.Fragment>
          } />

          <Route exact path="/forum" component={Forum} />
      </Switch>
      
    </div>
  );
  }
}
export default App;
