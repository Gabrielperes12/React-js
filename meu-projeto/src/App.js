import logo from './logo.svg';
import './App.css';
import Evento from './Evento';
import Form from './Form';
import Condicional from './Components/Condicional';


function App() {
  return (
    <div className="App">
      <h1>olá react</h1>
      <Evento/>
      <Form/>
      <Condicional/>
    </div>
  );
}

export default App;
