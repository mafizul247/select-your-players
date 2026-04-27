import React, { useState } from 'react';
import { FaUser, FaFlag } from 'react-icons/fa';

const Player = ({ player, handleSelected }) => {
    const [isSelected, setIsSelected] = useState(false);

    /* const handleSelected = (player) => {
        const playerPrice = parseInt(player.price.split("USD").join("").split(",").join(""));
        if (balance < playerPrice) {
            alert("Not Enought Coin");
            return;
        }else {
            setIsSelected(!isSelected);
            setBalance(balance - playerPrice);
            setPurchasePlayers([...purchasePlayers, player])
        }

    } */

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4 border-2">
            <figure>
                <img
                    className='h-[300px] rounded-md'
                    src={player.player_image}
                    alt={player.player_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser /> {player.player_name}</h2>
                <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-2'> <FaFlag /> <span>All Rounder</span></p>
                    <button className="btn btn-sm">{player.batting_style}</button>
                </div>
                <div className="divider"></div>
                <div className='flex justify-between items-center'>
                    <h4 className='text-xl font-bold'>Rating</h4>
                    <h4 className='font-bold'>{player.rating}</h4>
                </div>
                <div className='flex items-center justify-between'>
                    <p><b>Player Batting</b></p>
                    <p>{player.batting_style}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p><b>Price: ${player.price}</b></p>
                    <button disabled={isSelected} onClick={() => {
                        handleSelected(player); 
                        setIsSelected(!isSelected)
                        }} className={`btn btn-sm `}>{isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Player;