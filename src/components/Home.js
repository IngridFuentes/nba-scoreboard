import React from 'react';
import { Link } from 'react-router-dom';
import {Games} from './Games';


const Home = () => {

    return (
       
        <div className="App">
            <div className="title"> NBA Scores   </div>
            <div className="img-logo" ></div>
           
            <Link to="/forum">
                <div className="button-join">
                    <button type="button" class="btn btn-light"> 
                         Join the discussion  
                    </button>
                </div>
            </Link>
            <img className="image-ball"/>  
            <Games />
        </div>
     )
}

export default Home;