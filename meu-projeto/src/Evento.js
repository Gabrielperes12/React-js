function Evento(numero){
    function meuEvento(){
        console.log(`opa, fui ativado ${numero}`)
    }
    
    return(
        <>
        <p>
            Clique aqui para dispara um evento:</p>
            <button onClick={meuEvento}>ativar</button>
        </>
    )
}
export default Evento