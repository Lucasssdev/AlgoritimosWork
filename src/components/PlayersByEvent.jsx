export default function PlayersByEvent({historyPlayers, id, setViewPlayers}){

    console.log(id, '--',historyPlayers[2].idEvent)

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