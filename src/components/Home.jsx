export default function Home({ setMenu }){
    return(
        <div className=" h-screen w-screen  grid grid-cols-2 gap-4  ">
            <div className="flex flex-col items-center">
                <h1 className="flex p-8 font-black text-5xl self-start text-[#ffffff] uppercase ">
                    Trabalho de algoritimos ii
                </h1>
                <span className="text-white font-semibold text-base flex self-start ml-10 items-center gap-2">
                    Lucas Lemos Farah 
                    <strong className="text-2xl font-semibold">& </strong>
                    João Pedro Morais de Souza
                </span>
            
                {/* Botões que manipulam proximo componente a ser renderizado (escolha dos trabalhos)  */}
                <button onClick={()=>{setMenu(1)}} className='h-auto w-52 mt-32 font-black p-5 text-2xl  text-[#e4bf49] hover:text-white bg-white hover:bg-[#e4bf49] rounded-xl rounded-tl-none shadow-3xl hover:shadow-lg'>
                    String
                </button>
                <label className="text-white mt-3 w-[300px] text-center">
                    Programa que leia uma string e exiba uma mensagem se essa string está presente em um arquivo texto
                </label>
            </div>
            <div className=" flex flex-col justify-center items-center mt-56">
                <button  onClick={()=>{setMenu(2)}} className='h-auto w-52 font-black p-5 text-2xl  text-[#58b7f1] hover:text-white bg-white hover:bg-[#58b7f1] rounded-xl rounded-br-none shadow-3xl hover:shadow-lg'>
                    Evento
                </button>
                <label className="text-white mt-3 w-[300px] text-center">
                    Programa para cadastro de eventos e participantes
                </label>
            </div>
        </div>
    )
}                           