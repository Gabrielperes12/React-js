/*evento com formulários*/
function Form(){
    
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuario!')
    }
    
    
    return(
        <>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type='text' placeholder='Digite o seu nome'/>
            </div>
            <div>
            <input type='submit' value='Cadastrar'/>
            </div>
        </form>
        </>
    )
}
export default Form