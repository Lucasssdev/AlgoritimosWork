import {ArrowCircleLeft} from 'phosphor-react'

function ResultString({file,string,fileContent,finishSearch}) {
  
    return (
      <div className='flex h-screen w-screen flex-col justify-center items-center p-0  m-0 bg-[#bdee63]'>
          <div className='bg-[#a4ce55] p-10 pl-3 pt-3 w-[500px] justify-start items-center flex flex-col rounded-xl '>
            <span className='font-semibold text-lg'> 
                <strong>"{string.get}"</strong> aparece <strong>{string.value}</strong> vez(es) no arquivo <strong>{file.name}</strong>
              </span>
            <div className='h-[200px] flex justify-center mt-5 '>
                <p className='p-5 overflow-auto scrollbar-thin scrollbar-track-[#c4ea7e] scrollbar-thumb-[#92ad60] scrollbar-thumb-rounded scrollbar-track-rounded-full'>
                    {fileContent}
                </p>
            </div>
            <button onClick={finishSearch} className='px-32 py-3 mt-10 font-black rounded-xl bg-[#f6ffe4] hover:bg-[#e7fdbe] hover:text-lg'>
                Finalizar
            </button>
          </div>
      </div>
    )
  }
  
  export default ResultString