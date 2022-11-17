import Button from "./Components/Eventos/Button"

function Evento(){
    function meuEvento(){
        console.log(`Ativando primeiro evento`)
    }
    
function SegundoEvento(){
    console.log('Ativando o segundo evento')
}

return(
        <>
        <p>
            Clique aqui para dispara um evento:</p>
           
           {/*eventos para props*/ }
            <Button event={meuEvento} text ='Priemiro evento'/>
            <Button event={SegundoEvento} text ='Segundo evento'/>
           
        </>
    )
}
export default Evento