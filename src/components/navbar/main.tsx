import styles from './styles.module.scss';
import { MenuSvg, HomeSvg, PersonSvg, BriefcaseSvg, MessageSvg } from '../../assets/index';
import { Link } from 'react-router-dom';
import { ScrollProgressBar } from '../index';
import { useState, useEffect, useRef } from 'react';

export const Navbar: React.FC = (props) => {

  // State for hamburger menu
  const [menuState, setMenuState] = useState(false);
  
  // For nav link underline
  const [navHoverStyle, setNavHoverStyle] = useState({marginLeft: '0em'});
  const [navLinkId, setNavLinkId] = useState(0);
  const navLinkParent = useRef(null);

  const nav_links = [
    { to: '#', icon: HomeSvg, text: 'Home'},
    { to: '#', icon: PersonSvg, text: 'About Me'},
    { to: '#', icon: BriefcaseSvg, text: 'Projects'},
    { to: '#', icon: MessageSvg, text: 'Contact'}
  ]

  // Handle resize function
  const handleResize = () => {
    if (window.innerWidth >= 750) {
      setMenuState(false);
    }
  } 

  // Nav links
  const NavLink: React.FC<{text:string, to:string, className:string, icon?:React.ReactElement, id?:number, style?:object}> = (props) => {
    return (
      props.icon ? 
      <div className={props.className} style={props.style}>
        {props.icon}<Link className={props.className} onMouseOver={() => setNavLinkId(props.id || 0)} to={props.to}>{props.text}</Link>
      </div> : <Link className={props.className} onMouseOver={() => setNavLinkId(props.id || 0)} style={props.style} to={props.to}>{props.text}</Link>
    )
  }

  // Handle resize event
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize])

  // Update navlink underline width and margin
  useEffect(() => {
      if (navLinkParent.current) {
        const pixelWidth = Object.entries(navLinkParent.current.children).map(e => e[1]['offsetWidth'])[navLinkId];
        const pixelOffset = [0, ...Object.entries(navLinkParent.current.children).map(e => e[1]['offsetWidth']).slice(0, navLinkId)].reduce((a, b) => a+b)-1;
        setNavHoverStyle({marginLeft: `calc(${pixelOffset}px + 2em)`, width: `calc(${pixelWidth}px - 2em)`,})
      }
  }, [navLinkId])

  return (
    <div className={styles.container}>
      <div className={styles.background}/>
      <div className={styles.navbar_container}>
      <ScrollProgressBar/>
      <header className={styles.navbar}>

        {/* Mobile nav */}
        <MenuSvg fill='#898A8C' preserveAspectRatio='none' className={`${styles.hamburger_menu} ${!menuState ? styles.hamburger_menu_active : styles.hamburger_menu_hidden}`} onClick={() => setMenuState(!menuState)}/>
        <div onClick={() => setMenuState(!menuState)} className={`${styles.mobile_nav_menu} ${menuState ? styles.mobile_nav_menu_active : styles.mobile_nav_menu_hidden}`}>
          {nav_links.map((e, i) => <NavLink key={i} icon={<e.icon className={styles.nav_icon}/>} style={{animationDelay: `${i*75}ms`}} className={`${styles.navlink_mobile} ${menuState ? styles.navlink_mobile_active : styles.navlink_mobile_hidden}`} to={e.to} text={e.text}/>)}
        </div>

        {/* Desktop nav */}
        <div className={styles.navlink_container}>
          <div ref={navLinkParent}>
            {nav_links.map((e, i) => <NavLink key={i} id={i} className={styles.navlink_desktop} to={e.to} text={e.text}/>)}
          </div>
          <div style={navHoverStyle} className={styles.navlink_underline}/>
        </div>

      </header>
      </div>
      {props.children}
    </div>
  )
}
