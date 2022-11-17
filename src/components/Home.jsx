export default function Home({clickOnEvent, clickOnString}){
    return(
        <div className="flex h-screen flex-col gap-4 justify-center items-center ">
            <div>
                <h1 className="flex p-8 font-black text-lg">Escolha um trabalho</h1>
            </div>
            <div className="gap-4 flex">
                <button onClick={clickOnString} className='p-3 border-2 border-violet-600 bg-[#fff] rounded-md'>String</button>
                <button  onClick={clickOnEvent} className='p-3 border-2 border-violet-600 bg-[#fff] rounded-md'>Evento e Participantes</button>
            </div>
            
        </div>
    
        
    )
}