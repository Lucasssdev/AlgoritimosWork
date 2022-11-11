import {ArrowCircleLeft} from 'phosphor-react'
export default function CongratulationEvent({clickOnEvent, setCount ,creatEvent}){
    return(
        <div>
            <button onClick={()=> {setCount(3)}} className='flex justify-start ml-7 mt-3'><ArrowCircleLeft size={50} /></button>
            <h1>Evento cadastrado com <strong>sucesso</strong></h1>
            <button onClick={clickOnEvent}>Voltar</button>
            <button onClick={creatEvent}>Novo cadastro</button>
            
        </div>
    ) 
}