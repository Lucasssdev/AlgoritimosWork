import {ArrowCircleLeft} from 'phosphor-react'

function String({setCount, handleOnFile, string, handleOnString}) {
  //const file = document.getElementById('file');
  //const reader = new FileReader();
  //reader.readAsDataURL(file)

 
    const value = ""
    return (
      <div className='flex h-screen w-screen flex-col p-0  m-0 bg-[#fcfe6f]'>
        <button onClick={()=> {setCount(0)}} className='flex justify-start ml-7 mt-3'><ArrowCircleLeft size={50} /></button>
        <div className='flex h-screen flex-col gap-4 p-0 justify-center items-center  bg-[#fcfe6f]'>
          <h1 className="flex p-8 font-black text-lg">Selecione um arquivo de busca</h1>
          <label htmlFor="file" className=" flex w-28 justify-center rounded-md p-1 border-2  hover:bg-[#c4edf6] bg-[#fff]">Selecionar</label>
          <input id='file'  type="file" onChange={handleOnFile} className="hidden" />
        </div>

        <div className='flex h-screen flex-col gap-4 justify-center items-center bg-[#fcfe6f]'>
          <h1 className="flex p-8 font-seminold text-2xl">Qual palavra você quer buscar?</h1>
          <input id={'string'} value={string} onChange={handleOnString} type="text" placeholder="Digite aqui..." className=" rounded-md p-2" />

        </div>
      </div>
    )
  }
  
  export default String