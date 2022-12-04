import { useState, useEffect } from 'react'
import Home from './components/Home.jsx'
import String from './components/String.jsx'
import Options from './components/Options.jsx'
import CreatUser from './components/CreatUser.jsx'
import CreatEvent from './components/CreatEvent.jsx'
import ViewEvent from './components/ViewEvent.jsx'
import CongratulationEvent from './components/CongratulationEvent.jsx'
import CongratulationUser from './components/CongratulationUser.jsx'
import ResultString from './components/ResultString.jsx'


import './main.css'


function App() {

  //HOME ------------------------------------------------------------------------------------------------------------------------------------------------
  const [menu, setMenu] = useState(0) // State para gerenciar os componentes a senrem renderizados
  const [index, setIndex] = useState(0) // Auxilia com a posição do componente na exucução de função (apenas para compnentes de cadastro)
 
  const creatEvent = () => { 
    setMenu(3) //Proximo componete a renderizar
    setIndex(3) // posição do componete indicando que veio de um cadastro de evento
    
  }
  const creatUser = () => {
    setMenu(4) //Proximo componete a renderizar
    setIndex(4) // posição do componete indicando que veio de um cadastro de usuario
  }
  
  //OBS: demais manipulações de componentes são feitas nas diteramente na função do botão passando setMenu como paremetro

  //WORK STRING------------------------------------------------------------------------------------------------------------------------------------------------

    const [string,setString] = useState({ // State para armazenar dados da string a ser recebida
      get: '', //string
      value: 0 // numero de vezes que ela aparece
    })
    const [file,setFile] = useState({}) // State para armazenar o arquivo recebido
    const [fileContent,setFileContent] = useState('') // State para armazenar o Conteudo do arquivo em formato de string

    const handleOnString = (e) => { // Função para receber valor (da string) no input
      const key = e.target.id; // Recebe o id do input atual (id deve ser nomeado igual a propiedade de interesse do objeto)
      const value = e.target.value; // Recebe o valor digitado no input atual
      setString((str) => ({ // Atribui os valores ao State String
        ...str, //Mantém tudo que ja existe a cada novo evento
    
        [key]: value, //ATribui valor a propriedade do objeto
      })); 
    }

    const handleOnFile = (e) => { //Função para receber e manipular o arquivo
      
      const file = e.target.files[0]; // Recebe o arquivo do input
      
      setFile(file) // atribui o arquivo ao State para manipulação futura

      const reader = new FileReader(); // FileReader é uma função de JS para manipular arquivos
      reader.readAsText(file) // readAsText trata o arquivo como um arquivo de texto 

      reader.onload = () => { // função onload percorre o arquivo até o fim

        let fileContent =  reader.result; //variavel que recebe o body (conteudo) do arquivo (sem tags meta)

        fileContent.toString() //função toString tranforma o conteudo em uma string

        setFileContent(fileContent) //Atribui o conteudo do arquivo como uma string para o State
      }
    }

    const searchString = () => { //Função que procura a string no State fileContent, disparada ao click do botão "Procurar"

      if(string.get == '' || string.get == ' ' ){ // VErifica se a string não é vazia
        alert('Favor digite uma palavra!') //gera um alerta caso for 

      }else if(!fileContent){ // verifica se o Arquivo nao é vazio/nulo 
        alert('Favor Selecione um documento!') // Alerta caso for

      }else{

        let fileArrayLine = fileContent.split('\r\n') //Variavel recebe texto e tranforma ele em array a cada paragrafo
        let fileWord = [] // array para palvras

        fileArrayLine.map((text,index)=>{ //Percorre o array dos paragrafos
            fileWord[index] = text.split(' ') // Atribui arrays das palavra de cada paragrafo
        })

        fileWord.map((line) => { //percorre os arrays de de palavras por paragrafos, sendo 'line' cada paragrafo
            line.map((word) => { // percorre o paragrafo e Cada posiçãp deste array ja se entra uma palavra
             
              let content = word.includes(string.get) // variavel booleana, recebe seu valor a partir da função 'includes' 
              //função  icludes' verifica se a string está contida na palavra retornando true coso exista
              
              content ? setString(prev => ({ //Ternario para caso existir a string, onde "prev" é tudo que ja existe armazenado no objeto do State
                ...prev, // Mantém tudo que ja existe
                value: prev.value + 1 // atribui +1 a proprieda que conta o numero de vezes que ela aparece
            })) : null // Caso a string não exista não acontece nada 
          })

        /* OBS: Poderia ter feito em apenas um array com um fileContent.split( ' ' || '\r\n'), porém nem todo arquivo é igual e o sistema
        acabava quebrando em determinados tipos de texto, por isso optei em separar por paragrafor */
        
      })
        
       setMenu(8) //Leva o usuario para a vizualização do resultado
      }
    } 

    const finishSearch = () => { //função que zera todos os valores para uma nova pesquisa, chamada no click do botão "Finalizar" no compnente de resuldado
      setMenu(1)
      setString({ 
        get: '',
        value: 0
      })
      setFile({})
      setFileContent('')
    }
    

  // WORK EVENT------------------------------------------------------------------------------------------------------------------------------------------------

  const [historyEvent,SetHistoryEvent] = useState(JSON.parse(localStorage.getItem("Eventos")) ?? []) //State que recebe os dados de eventos no local storage ou array vazio caso nao exista nada
  
  const [event,setEvent] = useState({ //State com objeto para armazenar o evento a ser cadastrado
    id:"",
    description: "",
    local:"",
    date: ''
  })
 
  const [historyPlayers,SetHistoryPlayers] = useState(JSON.parse(localStorage.getItem("Participantes")) ?? []) //State que recebe os dados de participantes no local storage ou array vazio caso nao exista nada
  
  const [player,setPlayer] = useState({ //State com objeto para armazenar o participante a ser cadastrado
    id:"",
    name: "",
    idEvent: ""
  })
  
  
  const handleOnClick = () => { //Funcao do botao: valida qual pagina o usuario esta e adiciona os valores recebidos para variavel de historico
    if(index == 3 ){ //Valida se é um cadastro de evento

      setMenu(6)

      let array = [...historyEvent] // Variavel que recebe todo conteudo existente no historico de eventos (local storage)
      
      array.push({ //Função "push" adiciona na ultima posição do array o novo evento cadstrado
        id: event.id,
        description: event.description,
        local: event.local,
        date: event.date
      })
      SetHistoryEvent(array) // Atribui esse novo array ao historico de eventos

      setEvent({ //Zera os valores para um novo cadastro 
        id:"",
        description: "",
        local:"",
        date: ''
      })
     
      
    }else if( index == 4 ){ // Valida se é um cadastro de participante

      setMenu(7)
      
      let arrayPlayer = [...historyPlayers] // Variavel que recebe todo conteudo existente no historico de participantes (local storage)
      
      arrayPlayer.push({ // Adiciona na ultima posição do array o novo participante cadstrado
        id: player.id,
        name: player.name,
        idEvent: player.idEvent
      })

      SetHistoryPlayers(arrayPlayer) // Atribui esse novo array ao historico de eventos

      setPlayer({//Zera os valores para um novo cadastro 
        id:"",
        name: "",
        idEvent: ""
      })
    }
  }
  
  useEffect(()=>{
    // Adiciona ao localStorage toda vez que o State de historico sofrer mudancas
    localStorage.setItem("Eventos",JSON.stringify(historyEvent))
  },[historyEvent])

  useEffect(()=>{
    // Adiciona ao localStorage toda vez que o State de historico sofrer mudancas
    localStorage.setItem("Participantes",JSON.stringify(historyPlayers))
  },[historyPlayers])

  function handleDataEvent(e){  //Recebe valor digitado no input do cadastro de evento (CreatEvent)
      const key = e.target.id;
      const value = e.target.value;
      setEvent((event) => ({
        ...event,
    
        [key]: value,
    })); 
      
  }

  //Recebe valor digitado no input do cadastro de participante (CreatUser)
  function handleOnChange(e){
    const key = e.target.id;
    const value = e.target.value;
    setPlayer((player) => ({
      ...player,
          
      [key]: value,
    }));
  }
  
  return (
    <div className="flex h-screen w-screen gap-4 justify-center items-center bg-blueEyellow overflow-auto bg-cover bg-no-repeat bg-center ">
      { // Script que manipula os compnentes a serem renderizados de acordo com o valor do State menu
        menu == 0 ? <Home setMenu={setMenu} /> 
        : menu == 1 ? <String searchString={searchString} setMenu={setMenu} file={file} string={string} handleOnString={handleOnString} handleOnFile={handleOnFile}/> 
        : menu == 2 ? <Options setMenu={setMenu} creatEvent={creatEvent} creatUser={creatUser}/>
        : menu == 3 ? <CreatEvent setMenu={setMenu} handleDataEvent={handleDataEvent} event={event} handleOnClick={handleOnClick}/> 
        : menu == 4 ? <CreatUser  setMenu={setMenu} user={player} handleOnChange={handleOnChange} handleOnClick={handleOnClick}/> 
        : menu == 5 ? <ViewEvent historyPlayers={historyPlayers} setMenu={setMenu} historyEvent={historyEvent}/> 
        : menu == 6 ? <CongratulationEvent setMenu={setMenu} creatEvent={creatEvent}/>
        : menu == 7 ? <CongratulationUser setMenu={setMenu} creatUser={creatUser} /> 
        : menu == 8 ? <ResultString file={file} finishSearch={finishSearch} fileContent={fileContent} string={string}/>
        : null
      }
    </div>
  )
}

export default App
