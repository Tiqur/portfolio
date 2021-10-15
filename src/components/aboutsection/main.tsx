import React from 'react';
import styles from './styles.module.scss';


export const AboutSection: React.FC = () => {
  return (
   <div className={styles.container}>
    <p className={styles.title}>About Me</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna, turpis elementum pulvinar. Neque ultrices nulla auctor quam curabitur suscipit. Elementum libero tempus interdum nulla gravida euismod amet nullam tortor. Odio erat suspendisse faucibus neque, pretium velit. Dapibus laoreet nam fermentum nascetur euismod duis. Pulvinar vestibulum pellentesque mattis consequat eget tincidunt tristique feugiat vel. Habitant tincidunt justo tincidunt sit semper condimentum. Mauris mi metus, eget libero. Ac elit et interdum.</p>
    <div className={styles.background}>
    </div>
    {/* <div className={styles.inner}/> */}
    
   </div>
  )
}
