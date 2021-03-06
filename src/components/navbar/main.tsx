import styles from './styles.module.scss';
import { MenuSvg, HomeSvg, PersonSvg, BriefcaseSvg, MessageSvg } from '../../assets/index';
import { Link } from 'react-router-dom';
import { ScrollProgressBar } from '../index';
import { useState, useEffect, useRef } from 'react';

export const Navbar: React.FC = (props) => {
  // Hide mobile nav for first 500ms
  const [mobileNavHidden, setMobileNavHidden] = useState(true);

  // Ref to navbar background
  const navbarBackgroundRef = useRef(null);

  // State for hamburger menu
  const [menuState, setMenuState] = useState(false);

  // State for navbar scroll position
  const [oldYOffset, setOldYOffset] = useState(window.pageYOffset);

  // Direction of last scroll ( false = up, true = down )
  const [scrollDirection, setScrollDirection] = useState(true);
  const [lastDownScrollPos, setLastDownScrollPos] = useState(window.pageYOffset);
  const [lastUpScrollPos, setLastUpScrollPos] = useState(window.pageYOffset);
  const [isFixed, setIsFixed] = useState(false);
  
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

  // Detect scroll up / down
  const handleScroll = () => {
    const currentYOffset = window.pageYOffset;
    const scrollDirection = currentYOffset > oldYOffset;
    setScrollDirection(scrollDirection);
    scrollDirection ? setLastDownScrollPos(currentYOffset) : setLastUpScrollPos(currentYOffset);

    if (navbarBackgroundRef.current) {
      setIsFixed(lastDownScrollPos > oldYOffset + navbarBackgroundRef.current.clientHeight/2);
    }

    setOldYOffset(currentYOffset);
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

  // Trigger once per page load
  useEffect(() => {
    // Keep mobile nav hidden for first 500ms to avoid keframe overlay
    setTimeout(() => {
      setMobileNavHidden(false);
    }, 1000)
  }, [])

  // Handle resize event
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleResize, handleScroll])

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
      <div ref={navbarBackgroundRef} style={{position: isFixed ? 'fixed' : 'absolute', top: scrollDirection && !isFixed ? `calc(${lastUpScrollPos}px - 5em)` : isFixed ? '0' : `calc(${lastDownScrollPos}px - 10em)`}} className={styles.background}>
      <div className={styles.navbar_container}>
      <ScrollProgressBar/>
      <header className={styles.navbar}>

        {/* Mobile nav */}
        <MenuSvg fill='#898A8C' preserveAspectRatio='none' style={{opacity: mobileNavHidden ? '0' : 'initial'}} className={`${styles.hamburger_menu} ${!menuState ? styles.hamburger_menu_active : styles.hamburger_menu_hidden}`} onClick={() => setMenuState(!menuState)}/>
        <div onClick={() => setMenuState(!menuState)} style={{visibility: mobileNavHidden ? 'hidden' : 'visible'}} className={`${styles.mobile_nav_menu} ${menuState ? styles.mobile_nav_menu_active : styles.mobile_nav_menu_hidden}`}>
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
      </div>
      {props.children}
    </div>
  )
}
