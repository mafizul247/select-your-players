import React, { Suspense, useEffect, useState } from 'react';
import AvabilePlayers from '../../Players/AvabilePlayers/AvabilePlayers';
import SelectedPlayers from '../../Players/SelectedPlayers/SelectedPlayers';
import Header from '../../Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

/* const featchPlayers = async () => {
    const res = await fetch("/players.json")
    return await res.json()
} */

const Home = () => {
    // const plaryersPromise = featchPlayers();
    const [players, setPlayers] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const [balance, setBalance] = useState(600000000);
    const [purchasePlayers, setPurchasePlayers] = useState([]);

    const handleSelected = (player) => {
        const playerPrice = parseInt(player.price.split("USD").join("").split(",").join(""));
        if (balance < playerPrice) {
            alert("Not Enought Coin");
            toast.error("Not Enough Coin!")
            return;
        } else if (purchasePlayers.length >= 6) {
            toast.error("You Purchase 6 Players!");
            return;
        } else {
            // setIsSelected(!isSelected);
            setBalance(balance - playerPrice);
            setPurchasePlayers([...purchasePlayers, player])
            toast(`Wow you have purchase ${player.player_name}`)
        }
    }

    const handleRemovePlayer = (player) => {
        // console.log(purchasePlayers)
        const remaining = purchasePlayers.filter(pPlayer => pPlayer.id !== player.id);
        // console.log(remaining)
        setPurchasePlayers(remaining);
    }

    useEffect(() => {
        fetch('/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    /*  useEffect(() => {
         const playersData = async () => {
             const res = await fetch('/players.json');
             const data = await res.json();
             setPlayers(data);
         };
 
         playersData();
     }, []); */

    // console.log(purchasePlayers)

    return (
        <>
        <ToastContainer />
            <Header balance={balance} />
            <div className='pt-20'>
                <div className='flex justify-between items-center my-2'>
                    <h4 className="text-xl font-bold">{toggle ? "Available Players" : `Selected Players (${purchasePlayers.length}/6)`}</h4>
                    <div className='font-bold'>
                        <button onClick={() => setToggle(!toggle)} className={`border-r-0 border-2 py-3 px-8 rounded-l-3xl ${toggle ? "bg-lime-300" : ""}`}>Available</button>
                        <button onClick={() => setToggle(!toggle)} className={`border-l-0 border-2 py-3 px-8 rounded-r-3xl ${toggle ? "" : "bg-lime-300"}`}>Selected ({purchasePlayers.length})</button>
                    </div>
                </div>
                {
                    toggle ? <Suspense fallback={<p>Loading...</p>} >
                        <AvabilePlayers
                            players={players}
                            handleSelected={handleSelected} />
                    </Suspense> : <SelectedPlayers
                        purchasePlayers={purchasePlayers}
                        handleRemovePlayer={handleRemovePlayer} />
                }
            </div>
        </>
    );
};

export default Home;