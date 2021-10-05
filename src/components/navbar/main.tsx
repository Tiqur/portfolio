import styles from './styles.module.scss';
import { MenuSvg } from '../../assets/index';
import { Link } from 'react-router-dom';

const NavLink: React.FC<{text:string}> = (props) => {
  return (
    <Link to='#'>
      <p>{props.text}</p>
    </Link>
  )
}

export const Navbar: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <MenuSvg/>
        <NavLink text='Home'/>

      </header>
      {props.children}
    </div>

  )
}
