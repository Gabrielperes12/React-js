/*renderização condicional*/

import {useState} from 'react'

function Condicional(){
    var [email, setEmail] =  useState()
    var [userEmail, SetUserEmail] =  useState()

    function enviarEmail(e){
        e.preventDefault()
        SetUserEmail(email)
    }

    function LimparEmail(){
        SetUserEmail('')
    }

    return(
        <>
        <h2>Cadastre o seu e-mail:</h2>
        <form>
            <input type={email} placeholder='digite seu email...' onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit' onClick={enviarEmail}>Enviar Email</button>
            {userEmail &&  (
                <div>
                    <p>o e-mail do usuario é: {userEmail}</p> 
                    <button onClick={LimparEmail}>Limpar</button>
                </div>
            )
            }
        </form>
        </>
    )
}
export default Condicional