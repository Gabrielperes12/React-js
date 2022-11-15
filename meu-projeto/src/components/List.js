/*Fragemento*/
import Item from './Item'
function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
           <Item marca='Ferrari' ano_lancamento={1999}/> 
           <Item marca='GM' ano_lancamento={1994}/> 
           </ul>
        </>
    )
}
export default List