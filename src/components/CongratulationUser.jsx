import {ArrowCircleLeft,HandsClapping} from 'phosphor-react'
export default function CongratulationUser({ creatUser, setMenu}){
    return(
        <div className='flex h-screen w-screen  bg-[#f199c5]'>
            <button onClick={()=> {setMenu(2)}} className='flex pl-5 justify-start hover:text-[#e7358e] h-12 w-auto text-[#c60063] mt-3'><ArrowCircleLeft size={50} /></button>
            <div className='flex w-full p-9 h-full justify-center items-center flex-col'>
                <div className='flex flex-col text-white bg-[#f95baa]  items-center justify-between gap-2 h-52 w-72 p-9 pb-2 rounded-xl'>
                    <h1 className=' text-center text-white text-xl items-center justify-center'>
                        Participante cadastrado com <strong>sucesso!!!</strong>
                    </h1>
                    <HandsClapping size={90} />
                    <div className='flex justify-between bg-red w-full'>
                        <button onClick={()=>{setMenu(2)}} className='h-auto w-auto font-bold hover:bg-[#f5a5cd] hover:font-black text-xs p-2 text-[#ffffff] rounded-lg bg-[#ff8bc5] border-none mt-4 mb-1' >
                            Finalizar
                        </button>
                        <button onClick={creatUser} className='h-auto w-auto font-bold hover:bg-[#43e06d]  hover:font-black  text-sm p-2 text-[#ffffff] rounded-lg bg-[#3cf86e] border-none mt-4 mb-1'>
                            Novo cadastro
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}