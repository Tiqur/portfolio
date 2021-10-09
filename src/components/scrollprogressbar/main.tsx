import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';


export const ScrollProgressBar: React.FC = () => {

  // Scroll percentage
  const [scrollPercent, setScrollPercent] = useState(0);

  // Scroll event function
  const handleScroll = () => {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPos = window.pageYOffset;
    
    // Set scroll percent state
    setScrollPercent(scrollPos / pageHeight * 100);
  }

  // Handle scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
   <>
    <div className={styles.scroll_progress_background}/>
    <div style={{width: `${scrollPercent}vw`}} className={styles.scroll_progress}/>
   </>
  )
}
