import { useState } from "react"
import PlayersByEvent from "./PlayersByEvent" // Card dos participantes
import {UsersThree} from 'phosphor-react'

export default function CardEvent({historyPlayers, local,id,date,description}){

    const[viewPlayers, setViewPlayes] = useState(0) //State para controle de componete a ser renderizado (mostra o eveto ou os participantes)

    return(
        <div className=" flex  items-center  p-0 w-full h-64 justify-center flex-col ">
            {
                viewPlayers == 0 // Mosta o evnto
                ? 
                    <li className=" w-full h-full rounded-xl gap-2">
                        <div className="  w- full h-full  grid grid-cols-1  rounded-xl grid-rows-2 justify-center  gap-2 flex-col shadow-3xl hover:shadow-lg  border-solid border-4 border-[#ff8c00] bg-white" >
                            <div className="  w- full h-auto  grid grid-cols-2  rounded-xl justify-satar  gap-2 flex-col " >
                                <h1  className=" pl-3 uppercase w-auto flex  underline text-3xl justify-start items-start pt-5 font-black ">{description}</h1>
                                <div className="flex flex-col justify-start items-end p-3 gap-1">
                                    <button onClick={()=>setViewPlayes(1) } title="Mostrar participantes" className=" bg-[#ff9216] p-2 rounded-full justify-end h-auto w-auto text-xs hover:bg-[#f98500]">
                                        <UsersThree size={28} />
                                    </button>
                                    <span className=" font-semibold text-xs">
                                        Ver Part.
                                    </span>
                                </div>
                            </div>
                            <div className=" flex pl-4 flex-col justify-start items-start ">
                                <p className=" flex  text-lg gap-1 items-center font-normal text-center">
                                    <span className="font-bold   p-1  text-lg">
                                        Local:
                                    </span>
                                    {local}
                                </p>
                                <p className=" flex  text-lg gap-1  items-center font-normal text-center">
                                    <span className="font-bold   p-1 rounded-lg text-lg">
                                        Data:
                                    </span>
                                    {date.split('T')[0].split('-').reverse().join('/') /* Máscara para formato de data brasileira */}
                                </p>
                                <p className=" flex  text-lg gap-1  items-center font-normal text-center">
                                    <span className="font-bold   p-1 rounded-lg text-lg">
                                        Código:
                                    </span>
                                    {id}
                                </p>
                            </div>
                        </div>
                    </li>
                : <PlayersByEvent id={id} historyPlayers={historyPlayers} setViewPlayers={setViewPlayes}/> //Mostra os participantes do evento, alterna o card
            }
        </div>
       
    )   
}