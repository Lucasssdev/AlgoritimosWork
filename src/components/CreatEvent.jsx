import Input from "./Input"
import {ArrowCircleLeft} from 'phosphor-react'

export default function CreateEvent({handleDataEvent, setCount,handleOnClick,event}){
    return(
        <div className='flex h-screen gap-4 justify-center items-center bg-[#fcfe6f]'>
            <button onClick={()=> {setCount(2)}} className='flex justify-start ml-7 mt-3'><ArrowCircleLeft size={50} /></button>
            <form className="flex gap-3 flex-col">
                <Input placeholder={"Código do Evento"} id={'id'} value={event.id} onChange={handleDataEvent} type={'text'}/>
                <Input placeholder={'Tipo do evento'} id={'description'} value={event.description} onChange={handleDataEvent} type={'text'}/>
                <Input placeholder={"Local do evento"} id={'local'} value={event.local} onChange={handleDataEvent} type={'text'}/>
                <button onClick={handleOnClick}>Cadastrar</button>
            </form>
        </div>
    )
    
}