import styles from './styles.module.scss';
import { MenuSvg } from '../../assets/index';
import { Link } from 'react-router-dom';
import usePortal from 'react-useportal';
import { useState, useEffect, useRef } from 'react';

export const Navbar: React.FC = (props) => {

  // State for hamburger menu
  const [menuState, setMenuState] = useState(false);
  
  // For nav link underline
  const [navHoverStyle, setNavHoverStyle] = useState({marginLeft: '0em'});
  const [navLinkId, setNavLinkId] = useState(0);
  const navLinkParent = useRef(null);

  const nav_links = [
    { to: '#', text: 'Home'},
    { to: '#', text: 'About Me'},
    { to: '#', text: 'Projects'},
    { to: '#', text: 'Contact'}
  ]

  // Create portal to root for nav overlay
  const { Portal } = usePortal({
    bindTo: document.getElementById('root') as HTMLElement
  })

  // Handle resize function
  const handleResize = () => {
    if (window.innerWidth >= 750) {
      setMenuState(false);
    }
  } 

  // Nav links
  const NavLink: React.FC<{text:string, to:string, className:string, id?:number, style?:object}> = (props) => {
    return (
      <Link className={props.className} onMouseOver={() => setNavLinkId(props.id || 0)} style={props.style} to={props.to}>{props.text}</Link>
    )
  }

  // Handle resize event
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // Update navlink underline width and margin
  useEffect(() => {
      if (navLinkParent.current) {
        const pixelWidth = Object.entries(navLinkParent.current.children).map(e => e[1]['offsetWidth'])[navLinkId];
        const pixelOffset = [0, ...Object.entries(navLinkParent.current.children).map(e => e[1]['offsetWidth']).slice(0, navLinkId)].reduce((a, b) => a+b);
        setNavHoverStyle({marginLeft: `${pixelOffset}px`, width: `${pixelWidth}px`})
      }
  }, [navLinkId])

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
          <div ref={navLinkParent}>
            {nav_links.map((e, i) => <NavLink key={i} id={i} className={styles.navlink_desktop} to={e.to} text={e.text}/>)}
          </div>
          <div style={navHoverStyle} className={styles.navlink_underline}/>
        </div>

      </header>
      {props.children}
    </div>
  )
}
