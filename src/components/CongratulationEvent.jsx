import {ArrowCircleLeft ,HandsClapping} from 'phosphor-react'
export default function CongratulationEvent({ setMenu ,creatEvent}){
    return(
        <div className='flex h-screen w-screen  bg-[#f0bdff]'>
            <button onClick={()=> {setMenu(2)}} className='flex justify-start hover:text-[#bd49e0] h-12 w-auto text-[#8a0eaf] mt-3'><ArrowCircleLeft size={50} /></button>
            <div className='flex w-full p-9 h-full justify-center items-center flex-col'>
                <div className='flex flex-col text-white bg-[#c033eb]  items-center justify-between gap-2 h-52 w-96 p-9 pb-2 rounded-xl'>
                    <h1 className=' text-center text-white text-xl items-center justify-center'>
                        Evento cadastrado com <strong>sucesso!!!</strong>
                    </h1>
                    <HandsClapping size={90} />
                    <div onClick={()=>{setMenu(2)}} className='flex justify-around bg-red w-full'>
                        <button className='h-auto w-auto font-bold hover:bg-[#ee92fd]  hover:font-black  text-xs p-2 text-[#ffffff] rounded-lg bg-[#f3a8ff] border-none mt-4 mb-1'>
                            Finalizar
                        </button>
                        <button onClick={creatEvent} className='h-auto w-auto font-bold hover:bg-[#43e06d]  hover:font-black  text-sm p-2 text-[#ffffff] rounded-lg bg-[#3cf86e] border-none mt-4 mb-1' >
                            Novo cadastro</button>
                        <button onClick={()=>{setMenu(5)}} className='h-auto w-auto font-bold hover:bg-[#ff9216]  hover:font-black  text-sm p-2 text-[#ffffff] rounded-lg  bg-[#ffa940] border-none mt-4 mb-1'>
                            Ver Eventos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}