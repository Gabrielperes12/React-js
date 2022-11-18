import logo from './logo.svg';
import './App.css';
import Evento from './Evento';
import Form from './Form';
import Condicional from './Components/Condicional';
import Lista from './Components/Lista';


function App() {
  
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
    </div>
  );
}

export default App;
