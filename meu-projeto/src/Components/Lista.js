 {/*Renderização de listas*/}

function lista({itens}) {
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
            ))) : (
                <p>não itens </p>
            )}
        </>
    )
}
export default lista