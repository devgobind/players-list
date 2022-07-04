import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Playerinfo from '../Playerinfo/Playerinfo';
import './Playerlist.css'
const Playerlist = () => {
  const api_key = '9dcc64b6-d887-4fd2-bbf4-67a169bf45c4';
  const [players, setPlayers] = useState([]);
  const all_player_url = `https://api.cricapi.com/v1/players?apikey=${api_key}&offset=0`
  useEffect(() => {
      async function fetchPlayers() {
        axios.get(all_player_url)
        .then(res=>{
          setPlayers(res.data.data);
          console.log("Players:",players);
        })
        .catch(err=>console.log(err));
      }
      
      fetchPlayers();
      console.log(players);
  },[]);
  
  return (
    <div>{players.map((data, i)=>{
      return(
      <Playerinfo key={i} id={data.id} name={data.name} country={data.country} />)
    })}</div>
  )
}

export default Playerlist;