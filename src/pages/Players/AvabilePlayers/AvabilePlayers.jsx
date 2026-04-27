import React from 'react';
import Player from '../Player/Player';

const AvabilePlayers = ({ players, handleSelected }) => {
    // console.log(players);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
            {
                players.map(player => <Player
                    key={player.id}
                    player={player}
                    handleSelected={handleSelected} />)
            }
        </div>
    );
};

export default AvabilePlayers;