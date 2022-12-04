import {ArrowCircleLeft} from 'phosphor-react'

export default function PlayersByEvent({historyPlayers, id, setViewPlayers}){

    // Função para somar o numero de participantes do evento em questão
    
    let subscribed = 0
    historyPlayers.map((player)=> 
        player.idEvent == id //valida de o participante pertence ao evento
        ? subscribed++ //encremento
        : null 
    )

    return(
        <div className=" flex  items-center  p-0 w-full h-64 justify-center flex-col ">
            <li className=" w-full h-full rounded-xl gap-2">
                <div className="  w-full h-full  grid grid-cols-1  rounded-xl grid-rows-2 justify-center  gap-2 flex-col shadow-3xl hover:shadow-lg  border-solid border-4 border-[#ff8c00] bg-white" >
                    <div className="  w-full h-auto  flex  rounded-xl justify-start " >
                        <div className="flex w-12  justify-start items-start  p-3 gap-1">
                            <button onClick={()=>{setViewPlayers(0)} } title="Mostrar participantes" className=" text-[#ff9216] p-2 rounded-full justify-end h-auto w-auto text-xs hover:text-[#c66e09]">
                                <ArrowCircleLeft size={32}/>
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <h1  className=" pl-3 uppercase w-auto flex  underline text-3xl justify-start items-start pt-4 font-black ">
                                Participantes
                            </h1>
                            <span className='pl-8 pt-3 font-bold text-lg'>
                                {subscribed} inscrições
                            </span>
                        </div>
                    </div>
                    <div className=" flex pl-3 mr-3 flex-col w-auto h-auto overflow-y-auto  gap-2 justify-start items-start scrollbar-thin scrollbar-track-[#d2d2d2] scrollbar-thumb-[#ffc174] scrollbar-thumb-rounded scrollbar-track-rounded-full ">
                    
                    {
                        historyPlayers.map((player) => //percorre o array de historico de participantes e a cada participante;
                            player.idEvent == id //valida se pertence ao evento;
                            ? // Caso verdade, retorna o html com o participante
                                <div className=' flex flex-col justify-start  w-full  border-solid border-b-2 pb-3 border-[#cfcfcf] items-start' >
                                    <p className=" flex  text-base gap-1 h-auto items-start font-normal text-center">
                                        <span className="font-bold text-base">Nome:</span>
                                        {player.name} <span  className='font-thin text-xs flex self-center ml-2 italic'>{player.cpf}</span>            
                                    </p>
                                    <span className='font-thin text-xs '><strong>Cod:</strong> {player.id}</span>
                                </div>
                            : <></>
                        )
                    }
                    
                    </div>
                </div>
            </li>
        </div>
    )   
}