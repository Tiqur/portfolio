import React from 'react';
import styles from './styles.module.scss';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.indicator_element}/>
      <div style={{animationDelay: '200ms'}} className={styles.indicator_element}/>
      <div style={{animationDelay: '400ms'}} className={styles.indicator_element}/>
    </div>
  )
} 
