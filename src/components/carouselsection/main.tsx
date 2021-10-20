import styles from './styles.module.scss';
import { ArrowForwardSvg } from '../../assets/index';

export const CarouselSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Projects</p>
      <div className={styles.inner_container}>
        <ArrowForwardSvg className={styles.c_buttonL}/>
        <div className={styles.content} />
        <ArrowForwardSvg className={styles.c_button}/>
      </div>
      <div className={styles.navigation}>
      </div>
    </div>
  )
} 
