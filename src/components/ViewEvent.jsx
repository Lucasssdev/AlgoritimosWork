
import AllEvents from './AllEvents.jsx'
export default function ViewEvent({historyPlayers, historyEvent}){
    return(
       <ul>
        {
            historyEvent.lenth != [] 
            ? historyEvent.map((event) =>  <AllEvents historyPlayers={historyPlayers} description={event.description} local={event.local} id={event.id}/>) 
            : <h1>Nao Ha eventos</h1>
        }
       </ul>
    )
}