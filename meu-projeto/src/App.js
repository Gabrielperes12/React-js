import logo from './logo.svg';
import './App.css';
import Evento from './Evento';
import Form from './Form';
import Condicional from './Components/Condicional';
import Lista from './Components/Lista';

/*State Lift*/
import SeuNome from './Components/SeuNome';
import {useState} from 'react'
import Saudacao from './Components/saudacao';


function App() {

  const [nome,setNome] = useState()
  
  const meusItens = ['react', 'Vue', 'Angular'] 
  
  return (
    <div className="App">
      <h1>olá react</h1>
      <Evento/>
      <Form/>
      <Condicional/>

        {/*Renderização de listas*/}
      <h1>Renderização de listas</h1>
      <Lista itens={meusItens}/>


      {/*State Lift*/}
    <h1>State Lift</h1>
    <SeuNome setNome={setNome}/>
    <Saudacao  nome={nome}/>
    </div>
  );
}

export default App;
