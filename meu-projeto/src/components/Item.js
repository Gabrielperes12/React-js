/*props avançado*/
import PropTypes from 'prop-types'

/*Fragemento*/
function Item({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

/*props avançado*/
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}
Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0,
}

export default Item 