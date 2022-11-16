/*evento*/

function Evento({numero }){
    
    function meuEvento(){
        console.log(`Opa, fui a ativado! ${numero}`)
    }
    
    return(
        <>
        <p>Clicque para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}
export default Evento