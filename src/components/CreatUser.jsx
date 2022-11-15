import Input from "./Input"
import {ArrowCircleLeft} from 'phosphor-react'
export default function CreateUser({user,handleOnClick,handleOnChange, setCount}){
    return(
        <div>
            <button onClick={()=> {setCount(2)}} className='flex justify-start ml-7 mt-3'><ArrowCircleLeft size={50} /></button>
            <form className="flex gap-3 flex-col">
                <Input placeholder={"Nome completo"} id={'name'} value={user.name} onChange={handleOnChange} type={'text'}/>
                <Input placeholder={'Código de identificação'} id={'id'} value={user.id} onChange={handleOnChange} type={'text'}/>
                <Input placeholder={"Código do evento "} id={'idEvent'} value={user.idEvent} onChange={handleOnChange} type={'text'}/>
                <button onClick={handleOnClick}>Cadastrar</button>
            </form>
        </div>
    ) 
}