import logo from './logo.svg';
import './App.css';
import HelloWorld  from'./components/HelloWorld'
import SayMyName from './components/sayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {
  var name = 'Gabriel'

  var newname = name.toUpperCase()
  
  function sum (a,b){
    return a + b
  }

  var url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
     
    {/*css*/}
    <h1>Testando css</h1>
    <Frase/>
    <Frase/>
     
     
     <h1>Olá react</h1>
     <p>meu primeiro projeto</p>
     <p>olá, {newname}</p>
     <p>soma: {sum(1,5)}</p>
     <img src={url} alt='minha imagem'/>
     <HelloWorld/>
     
     {/*props*/}
     <SayMyName nome='Gabriel'/>
     <Pessoa nome='Renan' idade='28' profissao='dev'/> 
     

    {/*Fragemento*/}
    <List/>

    </div>
  );
}

export default App;