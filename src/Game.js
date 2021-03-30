import React from 'react';

export default function Game({ game }) {
    return(

        <div>
            {game.team}
            {game.score}
        </div>
    )
}