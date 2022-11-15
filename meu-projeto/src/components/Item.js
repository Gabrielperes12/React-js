/*Fragemento*/

import PropTypes from 'prop-types'

function Item(marca, ano_lancamento){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired
}
export default Item