import React, { Suspense, useEffect, useState } from 'react';
import AvabilePlayers from '../../Players/AvabilePlayers/AvabilePlayers';
import SelectedPlayers from '../../Players/SelectedPlayers/SelectedPlayers';
import Header from '../../Shared/Header/Header';

/* const featchPlayers = async () => {
    const res = await fetch("/players.json")
    return await res.json()
} */

const Home = () => {
    // const plaryersPromise = featchPlayers();
    const [players, setPlayers] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [balance, setBalance] = useState(600000000);

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

    //  console.log(players)

    return (
        <>
            <Header balance={balance} />
            <div className='pt-20'>
                <div className='flex justify-between items-center my-2'>
                    <h4 className="text-xl font-bold">{toggle ? "Available Players" : "Selected Players"}</h4>
                    <div className='font-bold'>
                        <button onClick={() => setToggle(!toggle)} className={`border-r-0 border-2 py-3 px-8 rounded-l-3xl ${toggle ? "bg-lime-300" : ""}`}>Available</button>
                        <button onClick={() => setToggle(!toggle)} className={`border-l-0 border-2 py-3 px-8 rounded-r-3xl ${toggle ? "" : "bg-lime-300"}`}>Selected (0)</button>
                    </div>
                </div>
                {
                    toggle ? <Suspense fallback={<p>Loading...</p>} >
                        <AvabilePlayers
                            players={players}
                            setBalance={setBalance}
                            balance={balance} />
                    </Suspense> : <SelectedPlayers />
                }
            </div>
        </>
    );
};

export default Home;