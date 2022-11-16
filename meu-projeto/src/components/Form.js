/*evento com formulários e usestate*/

/*usestate*/
import{useState} from 'react'

function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()
       console.log(`usuário ${name} foi cadastrado com a senha: ${password}`)
    }
     /*usestate*/
    var [name, setName] = useState('Gabriel')
    var[password, setPassword] = useState()
    

    return(
        <>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label  htmlFor='name'>Nome:</label>
                <input type='text' id='name' placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
            <label  htmlFor='password'>Senha:</label>
            <input type='password' id='password' name='password' placeholder='Digite o sua senha' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
            <input type='submit' value='Cadastrar'/>
            </div>
        </form>
        </>
    )
}
export default Form