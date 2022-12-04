import {ArrowCircleLeft,Eye,PlusCircle,UserCirclePlus} from 'phosphor-react'
export default function Options({creatEvent, creatUser, setMenu}) {
    
    return (
      <div className='flex h-screen w-screen  bg-gradient bg-cover bg-no-repeat bg-center'>
          <button onClick={()=> {setMenu(0)}} className='flex justify-start pl-5 hover:text-[#d7d7d7] h-12 w-auto text-[#fefefe] mt-3'>
            <ArrowCircleLeft size={50} />
          </button>
       
          <div className='flex flex-col h-screen w-screen gap-4  pt-20 justify-start pl-0 items-center bg-transparent'>
              <h1 className='font-black text-white text-5xl'>
                  Gestor de eventos
              </h1>
              <span className='text-white text-xl font-thin mb-20'>
                  Crie e gerencie eventos
              </span>
              <button onClick={creatEvent} className='h-18 w-[450px] flex items-center gap-2 justify-center border-none shadow-3xl hover:shadow-lg  font-bold hover:tracking-wider hover:bg-[#a500d7] text-xl p-3 text-[#f7f7f7] border-2  bg-[#c033eb] rounded-md'>
                  <PlusCircle size={20} />Criar um evento
              </button>
              <button onClick={creatUser} className='h-18 w-[450px] flex items-center gap-2 justify-center border-none shadow-3xl hover:shadow-lg  font-bold hover:tracking-wider hover:bg-[#f1067c] text-xl p-3 text-[#ffffff] border-2 bg-[#f95baa] rounded-md'>
                    <UserCirclePlus size={20} />Cadastrar novo participante
              </button>
              <button onClick={()=> {setMenu(5)}} className='h-18 w-[450px] border-none shadow-3xl hover:shadow-lg  font-bold hover:tracking-wider hover:bg-[#f5790d] flex items-center gap-2 justify-center text-xl p-3 text-[#ffffff] border-2 bg-[#ff902f] rounded-md'>
                  <Eye size={20} />Vizualizar eventos
              </button>
          </div>      
      </div>
    )
  }
  