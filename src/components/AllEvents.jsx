import { useState } from "react"
import PlayersByEvent from "./PlayersByEvent"
export default function AllEvent({historyPlayers, local,id,description}){

    const[viewPlayers, setViewPlayes] = useState(0)


    return(
        <div>
            {
                viewPlayers == 0 
                ? <li>
                    <div>
                        <h3>{description}</h3>
                        <p>{local}</p>
                        <p>{id}</p>
                    </div>
                    <div>
                        <button onClick={()=>setViewPlayes(1) }>Ver participantes</button>
                    </div>
                </li>
                : <PlayersByEvent id={id} historyPlayers={historyPlayers} setViewPlayers={setViewPlayes}/>
            }
        </div>
       
    )   
}