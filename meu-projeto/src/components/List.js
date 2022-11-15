/*Fragemento*/

import Item from './Item'
function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
           <Item marca='Ferrari' lancamento={1999}/> 
           <Item marca='GM' lancamento={1994}/> 
           <Item/> 
           </ul>
        </>
    )
}
export default List