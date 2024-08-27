import styles from './Home.module.css'
import homeimg from '../../img/homeimg.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
          <h1>Bem-vindo ao <span>Dinamo</span></h1>
          <p>Comece a gerenciar seus projetos agora mesmo!</p>
          <LinkButton to="/newproject" text="Criar Projeto"/>
          <img src={homeimg} alt='graficimg'></img>
        </section>
    );
  }
  
export default Home;