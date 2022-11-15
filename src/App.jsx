import { useState, useEffect } from 'react'
import Home from './components/Home.jsx'
import String from './components/String.jsx'
import Options from './components/Options.jsx'
import CreatUser from './components/CreatUser.jsx'
import CreatEvent from './components/CreatEvent.jsx'
import ViewEvent from './components/ViewEvent.jsx'
import CongratulationEvent from './components/CongratulationEvent.jsx'
import CongratulationUser from './components/CongratulationUser.jsx'


import './main.css'

function App() {

  //HOME
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    console.log(count)
  },[count])
  
  const clickOnString = () => {
    setCount(1)
  }
  const clickOnEvent= () => {
    setCount(2)
  }
  const creatEvent = () => { 
    setCount(3)
    setIndex(3)
    
  }
  const creatUser = () => {
    setCount(4)
    setIndex(4)
    
  }
  const viewEvent = () => {
    setCount(5)
  }
  
  const [user,setUser] = useState([{
    id:"",
    name: "",
    idEvent:""
  }])
  
  //WORK STRING

    const [string,setString] = useState('')

    const handleOnString = (e) => {
      const key = e.target.id;
      const value = e.target.value;
      setString((str) => ({
        ...str,
    
        [key]: value,
    })); 
    }

    const handleOnFile = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
       let fileContent =  reader.result;
       console.log(fileContent)
      }
      reader.error = () => {
        console.log(reader.error)
      }
      
    }
    
  useEffect(()=>{
    console.log(string)
  },[string])


  // WORK EVENT

  const [historyEvent,SetHistoryEvent] = useState(JSON.parse(localStorage.getItem("Eventos")) ?? [])
  const [event,setEvent] = useState({
    id:"",
    description: "",
    local:""
  })
  const [historyPlayers,SetHistoryPlayers] = useState(JSON.parse(localStorage.getItem("Participantes")) ?? [])
  const [player,setPlayer] = useState({
    id:"",
    name: "",
   // tel:"",
    idEvent: ""
  })
  
  //Funcao do botao: valida qual pagina o usuario esta e adiciona os valores recebidos para variavel de historico
  const handleOnClick = () => {
    if(index == 3 ){
      setCount(6)
      let array = [...historyEvent]
      array.push({
        id: event.id,
        description: event.description,
        local: event.local
      })
      SetHistoryEvent(array)
     
      
    }else if( index == 4 ){
      setCount(7)
      let arrayPlayer = [...historyPlayers]
      arrayPlayer.push({
        id: player.id,
        name: player.name,
        //tel: player.tel,
        idEvent: player.idEvent
      })
      SetHistoryPlayers(arrayPlayer)
    }
  }
  
  useEffect(()=>{
    console.log(event,"event",historyEvent)
  },[event])
  useEffect(()=>{
    console.log(player,"player",)
  },[player])

  useEffect(()=>{
    //adiciona ao localStorage toda vez que o historico sofrer mudancas
    localStorage.setItem("Eventos",JSON.stringify(historyEvent))
  },[historyEvent])

  useEffect(()=>{
    //adiciona ao localStorage toda vez que o historico sofrer mudancas
    localStorage.setItem("Participantes",JSON.stringify(historyPlayers))
  },[historyPlayers])

  //Recebe valor digita no CreatEvent
  function handleDataEvent(e){
      const key = e.target.id;
      const value = e.target.value;
      setEvent((event) => ({
        ...event,
    
        [key]: value,
    })); 
      
  }
  //Recebe valor digita no CreatUser
  function handleOnChange(e){
    const key = e.target.id;
    const value = e.target.value;
    setPlayer((player) => ({
      ...player,
  
      [key]: value,
  })); 
    
}
  
  


  return (
    <div className='flex h-screen gap-4 justify-center items-center bg-[#fcfe6f]'>
      {
        count == 0 ? <Home clickOnString={clickOnString} clickOnEvent={clickOnEvent}/> 
        : count == 1 ? <String setCount={setCount} String={string} handleOnString={handleOnString} handleOnFile={handleOnFile}/> 
        : count == 2 ? <Options setCount={setCount} creatEvent={creatEvent} creatUser={creatUser} viewEvent={viewEvent}/>
        : count == 3 ? <CreatEvent setCount={setCount} handleDataEvent={handleDataEvent} event={event} handleOnClick={handleOnClick}/> 
        : count == 4 ? <CreatUser  setCount={setCount} user={user} handleOnChange={handleOnChange} handleOnClick={handleOnClick}/> 
        : count == 5 ? <ViewEvent historyPlayers={historyPlayers} historyEvent={historyEvent}/> 
        : count == 6 ? <CongratulationEvent setCount={setCount} creatEvent={creatEvent} clickOnEvent={clickOnEvent}/>
        : count == 7 ? <CongratulationUser setCount={setCount} creatUser={creatUser} clickOnEvent={clickOnEvent}/> : null
      }
    </div>
  )
}

export default App
