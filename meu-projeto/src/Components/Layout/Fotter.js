import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Fotter.module.css'

function Fotter(){
    return (
    <footer className='{style.social_list}'>
        <ul >
            <li> <FaFacebook/></li>
            <li> <FaInstagram/></li>
            <li> <FaLinkedin/></li>
           
        </ul>
        <p>Nosso rodapé</p>
    </footer>)
}
export default Fotter