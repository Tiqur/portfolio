import styles from './styles.module.scss';
import { MenuSvg } from '../../assets/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavLink: React.FC<{text:string, to:string}> = (props) => {
  return (
    <Link to={props.to}>
      <p className={styles.navlink_text}>{props.text}</p>
    </Link>
  )
}

export const Navbar: React.FC = (props) => {

  // State for hamburger menu
  const [menuState, setMenuState] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <MenuSvg/>
        <div className={styles.navlink_container}>
          <NavLink to='#' text='Home'/>
          <NavLink to='#' text='About Me'/>
          <NavLink to='#' text='Home'/>
        </div>

      </header>
      {props.children}
    </div>

  )
}
