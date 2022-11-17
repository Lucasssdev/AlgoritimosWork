export default function PlayersByEvent({historyPlayers, id, setViewPlayers}){


    return(
        <div>
            {
                historyPlayers.map((player) => 
                   player.idEvent == id
                   ? 
                    <div>
                        <p>nome: {player.name}</p>
                    </div>
                   : null
                )
            }
        
        </div>
       
    )   
}