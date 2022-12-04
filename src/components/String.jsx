import {ArrowCircleLeft} from 'phosphor-react'

function String({setMenu, handleOnFile, file, string,searchString, handleOnString}) {
  
    return (
      <div className='flex h-screen w-screen flex-col p-0  m-0 bg-[#d3f9aa]'>
          <button onClick={()=> {setMenu(0)}} className='flex justify-start ml-7 mt-3'>
              <ArrowCircleLeft size={50} />
          </button>
          <div className='flex h-auto flex-col gap-4 p-0 mt-16 justify-center items-center '>
              <h1 className='text-2xl font-black mb-10'>
                  Veja se uma palavra se encontra dentro de um arquivo de texto
              </h1>
              <div className='bg-[#a4ce55] w-[350px] px-10 py-3 justify-center items-center flex flex-col rounded-xl '>
                  <h1 className="flex pb-3 font-semibold text-lg">
                      Selecione um arquivo
                  </h1>
                  <label htmlFor="file" className=" flex w-28 font-bold justify-center rounded-md p-1 border-2  hover:bg-[#e7fdbe] bg-[#f6ffe4]">
                      Selecionar
                  </label>
                  <input id='file'  type="file" onChange={handleOnFile} className="hidden" />
                  <span className='p-1 mt-2 rounded-xl border-solid border-b-2 '>
                      {file?.name}
                  </span>
                  {/* label referenciada ao input escondido do tipo file e span que passa o nome do arquivo quando ele existir*/}
            </div>
          </div>
          <div className='flex h-auto flex-col gap-4 justify-center items-center '>
              <div className='bg-[#a4ce55] w-[350px] p-10 justify-center flex flex-col rounded-xl mt-10'>
                  <h1 className="flex  font-semibold text-lg text-center">
                      Qual palavra você quer buscar?
                  </h1>
                  <span className='mb-8  text-sm font-thin'>
                      Considere letras maiusculas e minusculas
                  </span>
                  <input id={'get'} value={string.get} onChange={handleOnString} type="text" placeholder="Digite aqui..." className=" rounded-md p-2" />
              </div>
              <button onClick={searchString} className='px-32 py-3 font-black rounded-xl bg-[#f6ffe4] hover:bg-[#e7fdbe] hover:text-lg'>
                  Procurar
              </button>
          </div>
      </div>
    )
  }
  
  export default String