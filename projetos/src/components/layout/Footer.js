import styles from './Footer.module.css'

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer (){
    return(
        <footer className={styles.footer}>
            <p>Todos os direitos reservados - Vinicius &copy; 2024</p>

            <div className={styles.social}>
                <ul>
                    <li>
                        <FaFacebook />
                    </li>

                    <li>
                        <FaInstagram />
                    </li>

                    <li>
                        <FaLinkedin />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;  