
import AllEvents from './AllEvents.jsx'
export default function ViewEvent({historyPlayers, historyEvent}){
    return(
       <ul>
        {
            historyEvent!= [] 
            ? historyEvent.map((event,i=0) =>  <AllEvents key={i++} historyPlayers={historyPlayers} description={event.description} local={event.local} id={event.id}/>) 
            : <h1>Nao Ha eventos</h1> 
        }
       </ul>
    )
}