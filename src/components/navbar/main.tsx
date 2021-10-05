import styles from './styles.module.scss';
import { MenuSvg } from '../../assets/index';
import { Link } from 'react-router-dom';
import usePortal from 'react-useportal';
import { useState } from 'react';

const NavLink: React.FC<{text:string, to:string, className:string}> = (props) => {
  return (
    <Link className={props.className} to={props.to}>{props.text}</Link>
  )
}

export const Navbar: React.FC = (props) => {

  // State for hamburger menu
  const [menuState, setMenuState] = useState(false);

  // Craete portal to root for nav overlay
  const { Portal } = usePortal({
    bindTo: document.getElementById('root') as HTMLElement
  })

  const nav_links = [
    { to: '#', text: 'Home'},
    { to: '#', text: 'About Me'},
    { to: '#', text: 'Projects'},
    { to: '#', text: 'Contact'}
  ]

  return (
    <div className={styles.container}>
      <header className={styles.navbar}>

        {/* Mobile nav */}
        <MenuSvg className={styles.hamburger_menu} onClick={() => setMenuState(!menuState)}/>
        <Portal>
          <div onClick={() => setMenuState(!menuState)} className={`${styles.mobile_nav_menu} ${menuState ? styles.mobile_nav_menu_active : styles.mobile_nav_menu_hidden}`}>
            {nav_links.map((e) => <NavLink className={styles.navlink_mobile} to={e.to} text={e.text}/>)}
          </div>
        </Portal>

        {/* Desktop nav */}
        <div className={styles.navlink_container}>
          {nav_links.map((e) => <NavLink className={styles.navlink_desktop} to={e.to} text={e.text}/>)}
        </div>

      </header>
      {props.children}
    </div>
  )
}
