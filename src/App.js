import React from 'react';
import './App.scss';
import {Games} from './components/Games';
import { ReactCalendar } from './components/ReactCalendar';
// import GamesCards from './components/GamesCards';


class App extends React.Component {


  render() {
  return (
    <div className="App">
      <div className="title"> NBA Scores </div>
      <img />    
      {/* <GamesCards /> */}
      <Games />
      <ReactCalendar />
      
    </div>
  );
  }
}
export default App;
