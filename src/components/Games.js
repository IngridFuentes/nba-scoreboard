import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import GamesCards from './GamesCards';


export const Games = () => {
    
    const [ initialState, setInitialState ] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:3001/api/games')
        .then(res => {
            console.log(res)
            setInitialState(res.data)
        })
        .catch(error => {
            console.log(error)
        })

    })

    return(
        
        <div>
            <ul>
                { initialState.map(data=> 

                <GamesCards date={data.date} homeTeam={data.homeTeam} homeTeamCity={data.homeTeamCity} 
                            homeTeamScore={data.homeTeamScore} season={data.season} status={data.status} 
                            visitorTeam={data.visitorTeam} visitorTeamScore={data.visitorTeamScore} />
                 
                )}
            </ul>
            
        </div>    
            
       
    )
}