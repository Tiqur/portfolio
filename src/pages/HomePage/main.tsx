import React from 'react';
import styles from './styles.module.scss';


export const HomePage: React.FC = () => {
  return (
   <div className={styles.container}>
    <div className={styles.hero}>
      <h1 style={{color: '#EF008A', marginLeft: '0.08em', marginTop: '0.08em'}} className={styles.hero_text}>Trevor Brage</h1>
      <h1 style={{color: '#3071E8', marginLeft: '0.05em', marginTop: '0.05em'}} className={styles.hero_text}>Trevor Brage</h1>
      <h1 style={{color: '#B8B8B8'}} className={styles.hero_text}>Trevor Brage<h2 className={styles.hero_text2}>Full stack developer</h2></h1>
    </div>
    </div>
  )
}
