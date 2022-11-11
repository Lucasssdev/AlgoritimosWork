import {ArrowCircleLeft} from 'phosphor-react'
export default function CongratulationUser({clickOnEvent,creatUser, setCount}){
    return(
        <div>
            <button onClick={()=> {setCount(4)}} className='flex justify-start ml-7 mt-3'><ArrowCircleLeft size={50} /></button>
            <h1>PArticipante cadastrado com <strong>sucesso</strong></h1>
            <button onClick={clickOnEvent}>Voltar</button>
            <button onClick={creatUser}>Novo cadastro</button>
            
        </div>
    ) 
}