import Input from "./Input"
import {ArrowCircleLeft,User,Barcode,IdentificationCard } from 'phosphor-react'
export default function CreateUser({user,handleOnClick,handleOnChange, setMenu}){
    return(
        <div className='flex h-screen w-screen  bg-[#f199c5]'>
            <button onClick={()=> {setMenu(2)}} className='flex pl-5 justify-start hover:text-[#e7358e]  h-12 w-auto text-[#c60063] mt-3'>
                <ArrowCircleLeft size={50} />
            </button>
            <form className="flex w-full p-9 h-full justify-center items-center flex-col">
                <h1 className="flex justify-center font-black text-3xl">
                    Cadastre participantes
                </h1>
                <span  className=" font-thin text-base mb-10">
                    Associe-o ao evento pelo do código do evento
                </span> 
                <div className="flex flex-col bg-[#f95baa] gap-2 h-[280px] w-[500px] p-9 pb-2 rounded-xl ">
                    <Input Icon={User} placeholder={"Nome completo"} id={'name'} value={user.name} onChange={handleOnChange} type={'text'}/>
                    <Input Icon={IdentificationCard} placeholder={'Código de identificação'} id={'id'} value={user.id} onChange={handleOnChange} type={'text'}/>
                    <Input Icon={Barcode} placeholder={"Código do evento "} id={'idEvent'} value={user.idEvent} onChange={handleOnChange} type={'text'}/>
                <button onClick={handleOnClick} className="h-10 w-full font-bold hover:bg-[#43e06d]  hover:font-black  text-lg p-2 text-[#ffffff] rounded-lg  bg-[#3cf86e] border-none mt-4 mb-1">
                    Cadastrar
                </button>
                </div>           
            </form>
        </div>
    ) 
    
}