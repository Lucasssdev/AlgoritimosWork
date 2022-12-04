import {ArrowCircleLeft, PlusCircle} from 'phosphor-react'
import CardEvents from './CardEvents.jsx'//Compnente do Card de cada evento

export default function ViewEvent({historyPlayers,setMenu, historyEvent}){
    console.log(historyEvent)
    return(
        <div className='w-screen  flex flex-col items-center  h-screen pt-10 overflow-auto bg-[#ffa940]'>
            <div className=' w-full h-auto justify-start flex  pl-2'>
                <button onClick={()=> {setMenu(2)}} className='flex justify-self-start hover:text-[#efefef]  h-12 w-auto text-[#fff] mt-3 ml-10'>
                    <ArrowCircleLeft size={50} />
                </button>
                <h1 className='uppercase text-white flex pl-36   w-full  justify-center font-black text-5xl'>
                    eventos
                </h1>
                <button onClick={()=> {setMenu(3)}} className='flex  hover:text-[#e6e6e6]  h-12 w-[200px] items-center gap-1 text-base font-bold  text-[#fff] mt-3 mr-10'>
                    <PlusCircle size={50} /> Novo Evento
                </button>
            </div>
            <ul className='w-full justify-center grid  grid-cols-4 items-center h-auto gap-5 p-10'>
        
                {
                    
                    // ternario valida se o historico de eventos não for vazio, percorrendo o array de historico de eventos e renderiza o card passando os dados do posição que o map se encotra para o compnete
                    historyEvent != []  
                    ? historyEvent.map((event,i=0) =>  <CardEvents key={i++} historyPlayers={historyPlayers} description={event.description} date={event.date} local={event.local} id={event.id}/>) 
                    : <></>
                }
            </ul>
       </div>
    )
}