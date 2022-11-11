import {ArrowCircleLeft} from 'phosphor-react'
export default function Options({creatEvent, creatUser, setCount,viewEvent}) {
    
    return (
      <div className='flex h-screen gap-4 justify-center items-center bg-[#fcfe6f]'>
        <button onClick={()=> {setCount(0)}} className='flex justify-start ml-7 mt-3'><ArrowCircleLeft size={50} /></button>
        <button onClick={creatEvent} className='p-3 border-2 border-violet-600 bg-[#fff] rounded-md'>Cadastrar evento</button>
        <button onClick={creatUser} className='p-3 border-2 border-violet-600 bg-[#fff] rounded-md'>Cadarar novo participante</button>
        <button onClick={viewEvent} className='p-3 border-2 border-violet-600 bg-[#fff] rounded-md'>Vizualizar eventos</button>
      </div>
    )
  }
  