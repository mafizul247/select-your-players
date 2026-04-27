import React from 'react';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';

const SelectedPlayers = ({ purchasePlayers, handleRemovePlayer }) => {


    return (
        <div>
            {
                purchasePlayers.map((player, index) => <div key={index} className='p-2 border-2 mb-4 rounded-lg' >
                    <div className='flex justify-between items-center gap-8'>
                        <div className='flex gap-3 items-center'>
                            <img className='h-16 w-16 rounded-md' src={player.player_image} alt={player.player_name} />
                            <div>
                                <h4 className='text-xl font-bold'>{player.player_name}</h4>
                                <p>{player.batting_style}</p>
                            </div>
                        </div>
                        <button onClick={() =>handleRemovePlayer(player)} className='btn btn-outline btn-error'><FaTrashAlt /> </button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SelectedPlayers;