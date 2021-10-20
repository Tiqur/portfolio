import React from 'react';
import styles from './styles.module.scss';
import { HeroSection, AboutSection, CarouselSection } from '../../components/index';


export const HomePage: React.FC = () => {
  return (
   <div className={styles.container}>
    <HeroSection/>
    <AboutSection/>
    <CarouselSection/>
   </div>
  )
}
