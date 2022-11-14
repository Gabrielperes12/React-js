import logo from './logo.svg';
import './App.css';

function App() {
  var name = 'Gabriel'

  var newname = name.toUpperCase()
  
  function sum (a,b){
    return a + b
  }

  var url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
     <h1>Olá react</h1>
     <p>meu primeiro projeto</p>
     <p>olá, {newname}</p>
     <p>soma: {sum(1,5)}</p>
     <img src={url} alt='minha imagem'/>
     
    </div>
  );
}

export default App;
