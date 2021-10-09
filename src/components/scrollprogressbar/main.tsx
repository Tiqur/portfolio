import React, { useEffect } from 'react';
import styles from './styles.module.scss';


export const ScrollProgressBar: React.FC = () => {

  // Scroll event function
  const handleScroll = () => {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPos = window.pageYOffset;
    console.log(scrollPos, pageHeight);
  }

  // Handle scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
   <>
    <div className={styles.scroll_progress_background}/>
    <div className={styles.scroll_progress}/>
   </>
  )
}
