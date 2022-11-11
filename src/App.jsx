import { useState, useEffect } from 'react'
import Home from './components/Home.jsx'
import String from './components/String.jsx'
import Options from './components/Options.jsx'
import CreatUser from './components/CreatUser.jsx'
import CreatEvent from './components/CreatEvent.jsx'
import ViewEvent from './components/ViewEvent.jsx'
import CongratulationEvent from './components/CongratulationEvent.jsx'
import CongratulationUser from './components/CongratulationUser.jsx'
import fs from 'fs'
import './main.css'

function App() {
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
  const [event,setEvent] = useState([{
    id:"",
    description: "",
    local:""
  }])
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
      
      try {
        const data = fs.readFileSync(e.target.files[0],  'utf8');
        console.log(data);
      }catch (err){
        console.error(err);
      }
     
    }
    
  useEffect(()=>{
    console.log(string)
  },[string])

  // WORK EVENT
  const [historyEvent,SetHistoryEvent] = useState(JSON.parse(localStorage.getItem("Eventos")) ?? [])
  
  
  const handleOnClick = () => {
    if(index == 3 ){
      setCount(6)
      event.map((event)=>{
        let array = [...historyEvent]
        array.push({  
          id:event.id,
          description: event.description,
          local:event.local
        })
        SetHistoryEvent(array)
      }) 
      localStorage.setItem('Eventos',JSON.stringify(historyEvent))
    }else if( index == 4 ){
       setCount(7)
    }
  }
  useEffect(()=>{
    
    console.log(event)
  },[event])
  useEffect(()=>{
    console.log(historyEvent)
    
  },[historyEvent])


  function handleDataEvent(e){
      const key = e.target.id;
      const value = e.target.value;
      setEvent((event) => ({
        ...event,
    
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
        : count == 4 ? <CreatUser  setCount={setCount} user={user} handleOnClick={handleOnClick}/> 
        : count == 5 ? <ViewEvent/> 
        : count == 6 ? <CongratulationEvent setCount={setCount} creatEvent={creatEvent} clickOnEvent={clickOnEvent}/>
        : count == 7 ? <CongratulationUser setCount={setCount} creatUser={creatUser} clickOnEvent={clickOnEvent}/> : null
      }
    </div>
  )
}

export default App
