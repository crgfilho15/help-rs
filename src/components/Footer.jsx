import styles from "./Footer.module.css";
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';

export function Footer() {
    return (
        <nav className={styles.footer}>
            <div className={styles.headerTitleImg}>
                <img className={styles.headerImg} src="https://s5.static.brasilescola.uol.com.br/be/2021/04/bandeira-do-rio-grande-do-sul.jpg" alt="Bandeira do Rio Grande do Sul" />
                {/* <span className={styles.headerTitle}>HELP RS!</span> */}
            </div>
            <div>
                <a href="https://github.com/crgfilho15/help-rs">
                    <img className={styles.logo} src={github} alt="Logotipo GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/carlosrobertogarcia/">
                    <img className={styles.logo} src={linkedin} alt="Logotipo LinkedIn" />
                </a>
            </div>
        </nav>
    )
}