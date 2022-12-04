import Input from "./Input"
import {ArrowCircleLeft,Calendar, HouseLine,Barcode, Bookmark} from 'phosphor-react'

export default function CreateEvent({handleDataEvent, setMenu,handleOnClick,event}){
    return(
        <div className='flex h-screen w-screen  bg-[#f0bdff]'>
            <button onClick={()=> {setMenu(2)}} className='flex justify-start pl-5 hover:text-[#bd49e0] h-12 w-auto text-[#8a0eaf] mt-3'>
                <ArrowCircleLeft size={50} />
            </button>
          
            <form className="flex w-full p-9 h-full justify-center items-center flex-col">
               
                <h1 className="flex justify-center mb-10 font-black text-3xl">
                    Crie um novo evento
                </h1> 
                <div className="flex flex-col bg-[#c033eb] gap-2 h-[320px] w-[500px] p-9 pb-2 rounded-xl ">
                    {/* Componete input */}
                    <Input Icon={Bookmark} placeholder={'Nome do evento'} id={'description'} value={event.description} onChange={handleDataEvent} type={'text'}/>
                    <Input Icon={HouseLine} placeholder={"Local do evento"} id={'local'} value={event.local} onChange={handleDataEvent} type={'text'}/>
                    <Input Icon={Barcode} placeholder={"Código do Evnto"} id={'id'} value={event.id} onChange={handleDataEvent} type={'text'}/>
                    <div className="flex text-[#df43f7] border-none justify-start  items-center rounded-lg gap-2 pl-2 bg-[#fdf0ff]">
                        <Calendar size={20} />
                        <input type="date" placeholder={"Data do evento"} id={'date'} value={event.date} onChange={handleDataEvent}  className='rounded-md border-none text-black focus:outline-none  bg-transparent p-2' />
                    </div>
                    <button onClick={handleOnClick} className="h-10 w-full font-bold hover:bg-[#43e06d]  hover:font-black  text-lg p-2 text-[#ffffff] rounded-lg bg-[#3cf86e] border-none mt-4 mb-1" >
                        Cadastrar
                    </button>
                </div>            
            </form>
        </div>
    )
}