import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { Games } from './Games'
import Search from './Search'

const Suggestions = (props) => {
    // console.log(props.results)
  const options = props.query.map(res => (
    <li >
      {res.homeTeam}
    </li>

  ))
  return (
        <div>

            <ul className="filtered-team"> 
                {options}
            </ul>

        </div>
    

  )
}

export default Suggestions;