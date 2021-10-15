import React from 'react';
import styles from './styles.module.scss';
import { useRef, useState, useEffect } from 'react';


export const AboutSection: React.FC = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const innerContainerRef = useRef(null);
  const [backgroundHeightPx, setBackgroundHeightPx] = useState(0);

  // Dynamically set inner_container size based on children height
  const setInnerSize = () => {
    if (titleRef.current && textRef.current && innerContainerRef.current) {
      setBackgroundHeightPx(titleRef.current.clientHeight + textRef.current.clientHeight + innerContainerRef.current.clientHeight);
    }
  }

  useEffect(() => {
    setInnerSize();
    window.addEventListener('resize', setInnerSize);
    return () => window.removeEventListener('resize', setInnerSize);
  }, [setInnerSize])


  return (
   <div className={styles.container}>
    <div style={{height: `calc(${backgroundHeightPx}px + 6em)`}} className={styles.background}/>
    <p ref={titleRef} className={styles.title}>About Me</p>
    <p ref={textRef} className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna, turpis elementum pulvinar. Neque ultrices nulla auctor quam curabitur suscipit. Elementum libero tempus interdum nulla gravida euismod amet nullam tortor. Odio erat suspendisse faucibus neque, pretium velit. Dapibus laoreet nam fermentum nascetur euismod duis. Pulvinar vestibulum pellentesque mattis consequat eget tincidunt tristique feugiat vel. Habitant tincidunt justo tincidunt sit semper condimentum. Mauris mi metus, eget libero. Ac elit et interdum.</p>
    <div ref={innerContainerRef} className={styles.inner}/>
   </div>
  )
}
