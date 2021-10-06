import styles from './styles.module.scss';
import { MenuSvg } from '../../assets/index';
import { Link } from 'react-router-dom';
import usePortal from 'react-useportal';
import { useState, useEffect } from 'react';

const NavLink: React.FC<{text:string, to:string, className:string, style?:object}> = (props) => {
  return (
    <Link className={props.className} style={props.style} to={props.to}>{props.text}</Link>
  )
}

export const Navbar: React.FC = (props) => {

  // State for hamburger menu
  const [menuState, setMenuState] = useState(false);

  // Create portal to root for nav overlay
  const { Portal } = usePortal({
    bindTo: document.getElementById('root') as HTMLElement
  })

  const handleResize = () => {
    if (window.innerWidth >= 750) {
      setMenuState(false);
    }
  } 

  // Handle resize event
  useEffect(() => {
    window.addEventListener('resize', handleResize);
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
            {nav_links.map((e, i) => <NavLink key={i} style={{animationDelay: `${i*75}ms`}} className={`${styles.navlink_mobile} ${menuState ? styles.navlink_mobile_active : styles.navlink_mobile_hidden}`} to={e.to} text={e.text}/>)}
          </div>
        </Portal>

        {/* Desktop nav */}
        <div className={styles.navlink_container}>
          {nav_links.map((e, i) => <NavLink key={i} className={styles.navlink_desktop} to={e.to} text={e.text}/>)}
        </div>

      </header>
      {props.children}
    </div>
  )
}
