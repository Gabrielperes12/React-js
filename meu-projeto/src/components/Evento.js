/*evento*/

function Evento({numero }){
    
    function meuEvento(){
        console.log(`Opa, fui a ativado! ${numero}`)
    }
    
    return(
        <>
        <p>Clicque para disparar um evento:</p>
        
        {/*evento por props*/}
        <Button text='Primeiro evento'/>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}
export default Evento