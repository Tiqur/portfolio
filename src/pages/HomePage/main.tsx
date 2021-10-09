import React from 'react';
import styles from './styles.module.scss';
import { HeroSection, AboutSection } from '../../components/index';


export const HomePage: React.FC = () => {
  return (
   <div className={styles.container}>
    <HeroSection/>
    <AboutSection/>
   </div>
  )
}
